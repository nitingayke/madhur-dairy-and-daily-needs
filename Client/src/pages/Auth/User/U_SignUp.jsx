import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"

export default function U_SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, //creates a shallow copy of the previous state object.
      [name]: value, // dynamically sets the property with the name stored in the name variable to the value stored in the value variable.
    }));
  };

  let handleFormSumbit = async (e) => {
    e.preventDefault();
    console.log(" Signup form submitted");
    // console.log("FormData : ",formData);

    await axios.post("http://localhost:9000/u/signup", formData)
      .then((res) => {
        console.log("Responce Data : ", res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate("/u/login")
        }
      }).catch((error) => {
        console.log(error.response.data.message);
        toast.error("User already exists");
      })

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-center bg-no-repeat bg-cover px-4 py-5"
      style={{
        backgroundImage: `url('https://www.shutterstock.com/image-photo/fresh-organic-dairy-products-butter-260nw-1921889378.jpg')`,
        backgroundColor: "#fdf6e3", // fallback color for traffic background
      }}
      >
        
      <div className="rounded-3xl border border-yellow-300 shadow-2xl bg-white/90 backdrop-blur-md px-8 py-6 w-full max-w-lg transition-all duration-300 hover:shadow-yellow-400 animate-fadeIn">
        <form
          action="/u/signup"
          method="post"
          className="flex flex-col items-center justify-center w-full"
          onSubmit={(e) => {
            handleFormSumbit(e);
          }}
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgzNTRkYjY5MDdjODE5MTlkMDU3YTMwZTFlYWE5OTY6ZmlsZV8wMDAwMDAwMDZjYTA2MjMwOGQ1YTE4ZDQxOTg2OGM0YSIsInRzIjoiNDg1NjQ1IiwicCI6InB5aSIsInNpZyI6IjhlOTJjNDAwNDczZjk4NzE1YmIzZDA3NWFiNTJjODQzNTFmNDFmYTBmY2VlYjdkNzVhMDVhNTI4NTg0MWYyNDYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" alt="madhur logo" className="rounded-2xl shadow-2xl shadow-gray-400 h-30 w-50 mb-5" />
            <h1 className="text-2xl sm:text-3xl font-bold text-yellow-800">User Signup</h1>
          </div>

          <div className="input-section w-full flex flex-col items-center justify-center gap-6">
            <TextField
              type="text"
              id="username"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your username"
              className="w-[98%] transition-all duration-200 hover:shadow-sm"
              required
            />
            <TextField
              type="email"
              id="email"
              label="Email"
              name="email"
              value={formData.email}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Enter your password"
              className="w-[98%] transition-all duration-200 hover:shadow-sm"
              required
            />
          </div>

          <div className="mt-6 flex justify-center w-full">
            <Button
              variant="contained"
              color="warning"
              className="w-[98%] transition-transform  font-bold tracking-wide"
              type="submit"
            >
              🧈 Sign up
            </Button>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-700">
            <p className="mr-2 font-medium">Already have an account?</p>
            <Link to="/u/login" className="text-yellow-600 hover:underline font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>

  );
}
