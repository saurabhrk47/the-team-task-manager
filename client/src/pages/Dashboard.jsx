import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      navigate("/login");

    } else {

      fetchTasks();

    }

  }, []);


  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/tasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };


  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { status }
      );

      fetchTasks();

    } catch (error) {

      alert("Status update failed");

    }
  };


  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-8 text-white">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-extrabold">
            Task Dashboard
          </h1>

          <p className="text-gray-300 mt-2">
            Organize your workflow beautifully 🚀
          </p>

        </div>


        <div className="flex gap-4">

          <button
            onClick={() => navigate("/create-task")}
            className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:scale-105"
          >
            + Create Task
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:scale-105"
          >
            Logout
          </button>

        </div>

      </div>


      {
        tasks.length === 0 ? (

          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl text-center">

            <h2 className="text-3xl font-bold mb-4">
              No Tasks Yet
            </h2>

            <p className="text-gray-300">
              Create your first task and boost productivity
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              tasks.map((task) => (

                <div
                  key={task._id}
                  className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
                >

                  <h2 className="text-3xl font-bold mb-3">
                    {task.title}
                  </h2>

                  <p className="text-gray-300 mb-5">
                    {task.description}
                  </p>


                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      task.status === "Pending"
                        ? "bg-yellow-400 text-black"
                        : task.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {task.status}
                  </span>


                  <div className="mt-5">

                    <select
                      value={task.status}
                      onChange={(e) =>
                        updateStatus(task._id, e.target.value)
                      }
                      className="w-full bg-white/20 border border-white/20 p-3 rounded-2xl text-white"
                    >

                      <option className="text-black" value="Pending">
                        Pending
                      </option>

                      <option className="text-black" value="In Progress">
                        In Progress
                      </option>

                      <option className="text-black" value="Completed">
                        Completed
                      </option>

                    </select>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}

export default Dashboard;