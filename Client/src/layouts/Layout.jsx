import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";

export default function Layout({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="h-screen flex flex-col overflow-auto">
            <Navbar />
            <main className={`flex-1 ${theme === 'light' ? 'bg-white text-black' : 'bg-[#121212] text-white'}`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}