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

  let handleFormSumbit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:9000/u/login", formData);

      if(response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        navigate("/home");
      } else {
        toast.error("Not Logged in, please try again!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Not Logged in, please try again!");
    } finally {
      setIsLoading(false);
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center  px-4 py-10 bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-photo/fresh-organic-dairy-products-butter-260nw-1921889378.jpg')`,
        backgroundColor: "#fdf6e3", 
      }}>
      <div className="rounded-3xl bg-opacity-80 backdrop-blur-md  border border-yellow-300 shadow-2xl bg-white/90  px-8 py-12 w-full max-w-lg transition-all duration-300 hover:shadow-yellow-400 animate-fade-in">
        <form
          action="#"
          className="flex flex-col items-center justify-center w-full"
          onSubmit={(e) => {
            handleFormSumbit(e);
          }}
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgzNTRkYjY5MDdjODE5MTlkMDU3YTMwZTFlYWE5OTY6ZmlsZV8wMDAwMDAwMDZjYTA2MjMwOGQ1YTE4ZDQxOTg2OGM0YSIsInRzIjoiNDg1NjQ1IiwicCI6InB5aSIsInNpZyI6IjhlOTJjNDAwNDczZjk4NzE1YmIzZDA3NWFiNTJjODQzNTFmNDFmYTBmY2VlYjdkNzVhMDVhNTI4NTg0MWYyNDYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" alt="madhur logo" className="rounded-2xl shadow-2xl shadow-gray-400 h-30 w-50 mb-5" />
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-800">User Login</h1>
          </div>

          <div className="input-section w-full flex flex-col items-center justify-center gap-6">
            <TextField
              id="email"
              label="Email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your email"
              className="w-[98%] transition-all duration-200 hover:shadow-sm"
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
              className="w-[98%] transition-all duration-200 hover:shadow-sm"
              required
            />
          </div>

          <Link
            to="/forget"
            className="mt-1 text-sm text-yellow-600 hover:underline w-[98%] text-right"
          >
            Forgot password?
          </Link>

          <div className="mt-6 flex justify-center w-full">
            <Button
              variant="contained"
              color="warning"
              className="w-[98%]  font-bold tracking-wide"
              type="submit"
            >
              { isLoading ? "Loading..." : "Login"}
            </Button>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-700">
            <p className="mr-2 font-medium">Don't have an account?</p>
            <Link to="/u/signup" className="text-yellow-600 hover:underline font-semibold">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}




