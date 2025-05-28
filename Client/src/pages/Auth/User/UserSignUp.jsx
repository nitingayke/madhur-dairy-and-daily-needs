import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserSignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSumbit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:9000/u/signup", formData);
      if (res.status === 201 || res.status === 200) {
        toast.success("Signup Successful!");
        navigate("/login");
        setFormData({ username: "", email: "", password: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "User already exists or server error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6 bg-gray-100">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md w-full max-w-md p-6 sm:p-8">
        <form className="w-full" onSubmit={handleFormSumbit}>
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgzNTRkYjY5MDdjODE5MTlkMDU3YTMwZTFlYWE5OTY6ZmlsZV8wMDAwMDAwMDZjYTA2MjMwOGQ1YTE4ZDQxOTg2OGM0YSIsInRzIjoiNDg1NjQ1IiwicCI6InB5aSIsInNpZyI6IjhlOTJjNDAwNDczZjk4NzE1YmIzZDA3NWFiNTJjODQzNTFmNDFmYTBmY2VlYjdkNzVhMDVhNTI4NTg0MWYyNDYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
              alt="madhur logo"
              className="h-24 rounded-xl shadow"
            />
            <h1 className="mt-3 text-2xl font-semibold text-yellow-800">User Signup</h1>
          </div>

          <div className="flex flex-col gap-4 mb-3">
            <TextField
              id="username"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
          </div>

          <Button
            variant="contained"
            color="warning"
            type="submit"
            fullWidth
            className="font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign up"}
          </Button>

          <div className="mt-4 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-700 font-medium hover:underline">
              Login
            </Link>
          </div>

          <div className="mt-2 text-center text-sm text-gray-700">
            Are you an admin?{" "}
            <Link to="/admin/login" className="text-yellow-700 font-medium hover:underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
