import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`text-center text-sm py-3 ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-[#282828] text-white'
            }`}>
            &copy; 2025 Madhur Dairy and Daily Needs. All rights reserved.
        </footer>

    );  
}
