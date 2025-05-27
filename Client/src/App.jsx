import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Layout from "./layouts/Layout"
import NotFound from "./components/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  )
}

export default App
