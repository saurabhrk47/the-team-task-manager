import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTask() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://tender-kindness-production.up.railway.app/api/tasks",
        formData
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Task creation failed");

    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-6">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-extrabold text-white text-center mb-3">
          Create Task
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Plan your work. Stay productive 🚀
        </p>


        <form onSubmit={handleSubmit}>

          <div className="mb-5">

            <label className="block text-white mb-2 font-semibold">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 text-white placeholder-gray-300 outline-none"
            />

          </div>


          <div className="mb-6">

            <label className="block text-white mb-2 font-semibold">
              Task Description
            </label>

            <textarea
              name="description"
              rows="6"
              placeholder="Describe your task..."
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 text-white placeholder-gray-300 outline-none"
            />

          </div>


          <div className="flex gap-4">

            <button
              type="submit"
              className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-105 shadow-lg"
            >
              Create Task
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-2xl text-lg font-bold transition duration-300"
            >
              Back
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateTask;