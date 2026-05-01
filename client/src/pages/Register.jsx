import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      alert("Registration Failed");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-6">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-5xl font-extrabold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-white/80 text-center mb-8">
          Start managing your work beautifully
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/80 outline-none mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/80 outline-none mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-2xl bg-white/80 outline-none mb-6"
          />

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Register
          </button>

        </form>

        <p className="text-center text-white mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-bold text-yellow-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;