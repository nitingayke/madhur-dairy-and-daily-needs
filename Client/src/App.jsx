import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound";

import UserLogin from "./pages/Auth/User/UserLogin";
import UserSignUp from "./pages/Auth/User/UserSignUp";
import AdminLogin from "./pages/Auth/Admin/AdminLogin";
import Home from "./pages/Home";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
