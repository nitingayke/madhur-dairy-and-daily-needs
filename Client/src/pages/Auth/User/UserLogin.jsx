import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const response = await axios.post("http://localhost:9000/u/login", formData);
      if (response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        toast.success("Login Successful!");
        navigate("/home");
      } else {
        toast.error("Login failed, please try again.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Server error or invalid credentials.");
    } finally {
      setIsLoading(false);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 bg-white">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-md px-6 py-10 w-full max-w-md">
        <form className="flex flex-col items-center w-full" onSubmit={handleFormSumbit}>
          <div className="flex flex-col items-center gap-2 mb-5">
            <img
              src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgzNTRkYjY5MDdjODE5MTlkMDU3YTMwZTFlYWE5OTY6ZmlsZV8wMDAwMDAwMDZjYTA2MjMwOGQ1YTE4ZDQxOTg2OGM0YSIsInRzIjoiNDg1NjQ1IiwicCI6InB5aSIsInNpZyI6IjhlOTJjNDAwNDczZjk4NzE1YmIzZDA3NWFiNTJjODQzNTFmNDFmYTBmY2VlYjdkNzVhMDVhNTI4NTg0MWYyNDYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
              alt="Logo"
              className="rounded-lg shadow-md w-32 h-auto"
            />
            <h1 className="text-2xl font-bold text-yellow-700">User Login</h1>
          </div>

          <div className="w-full flex flex-col gap-5">
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
            <div className="text-sm text-right text-yellow-600 hover:underline">
              <Link to="/forget">Forgot password?</Link>
            </div>
          </div>

          <Button
            variant="contained"
            color="warning"
            className="w-full mt-6 font-semibold"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          <div className="mt-5 text-sm text-gray-700 flex flex-col sm:flex-row items-center justify-center">
            <p className="mr-1">Don't have an account?</p>
            <Link to="/u/signup" className="text-yellow-600 hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
