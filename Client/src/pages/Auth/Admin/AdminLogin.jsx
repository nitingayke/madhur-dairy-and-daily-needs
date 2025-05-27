import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/admin/signup", formData);
      if (res.data) {
        localStorage.setItem("Admin", JSON.stringify(res.data.admin));
        toast.success("Signup successful as Admin");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        navigate("/home");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed, try again");
    }

    setFormData({
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-opacity-80 backdrop-blur-md rounded-xl border border-yellow-700 p-8 shadow-2xl">
        <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
          <div className="flex flex-col items-center gap-2 mb-6">
            <img
              src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgzNTRkYjY5MDdjODE5MTlkMDU3YTMwZTFlYWE5OTY6ZmlsZV8wMDAwMDAwMDZjYTA2MjMwOGQ1YTE4ZDQxOTg2OGM0YSIsInRzIjoiNDg1NjQ1IiwicCI6InB5aSIsInNpZyI6IjhlOTJjNDAwNDczZjk4NzE1YmIzZDA3NWFiNTJjODQzNTFmNDFmYTBmY2VlYjdkNzVhMDVhNTI4NTg0MWYyNDYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
              alt="madhur logo"
              className="rounded-2xl shadow-2xl shadow-gray-400 h-30 w-50 mb-5"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-800">Admin Signup</h1>
          </div>

          <div className="w-full flex flex-col gap-4">
            <TextField
              id="name"
              label="Name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your name"
              className="w-full"
              required
            />
            <TextField
              id="email"
              label="Email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your email"
              className="w-full"
              required
            />
            <TextField
              type="password"
              id="password"
              label="Password"
              value={formData.password}
              name="password"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your password"
              className="w-full"
              required
            />
          </div>

          <div className="mt-6 w-full">
            <Button
              variant="contained"
              color="warning"
              className="w-full"
              type="submit"
            >
              Signup
            </Button>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center text-center gap-1">
            <p className="text-sm font-medium">Already have an admin account?</p>
            <Link to="/login" className="text-yellow-600 hover:underline text-sm font-semibold">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
