import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const res = await axios.post(
        "https://tender-kindness-production.up.railway.app/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-5xl font-extrabold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-white/80 text-center mb-8">
          Login to manage your tasks efficiently
        </p>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <p className="text-center text-white mt-6">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="font-bold text-yellow-300"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;