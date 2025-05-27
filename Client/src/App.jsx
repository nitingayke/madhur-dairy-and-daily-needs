import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Layout from "./layouts/Layout"
import NotFound from "./components/NotFound"
import U_SignUp from "../../../../MadhurDairyAndDailyNeeds/Client/src/pages/Auth/User/U_SignUp"
import U_Login from "../../Client/src/pages/Auth/User/U_Login"
import Login from "../../Client/src/pages/Auth/Admin/Login"
import { useAdminAuth, useUserAuth } from "../src/context/AuthProvider"

function App() {

  const [authUser] = useUserAuth();
  const [authAdmin] = useAdminAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
      <Route path="/login" element={authUser ? null : <U_Login />} />
      <Route path="/signup" element={authUser ? null : <U_SignUp />} />
      <Route path="/admin/login" element={authAdmin ? null : <Login />} />
      {/* <Route path="/" element={authUser || authAdmin ? <LandingPage /> : <Navigate to="/u/login" />} /> */}
    </Routes>
  )
}

export default App
