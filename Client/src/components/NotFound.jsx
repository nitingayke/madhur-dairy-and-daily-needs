import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <div className={`flex flex-col items-center justify-center h-[80vh] text-center px-4 ${
            theme === 'light' ? 'text-gray-800' : 'text-gray-100'
        }`}>
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl md:text-2xl mb-2">Oops! Page not found.</p>
            <p className="text-md md:text-lg text-gray-500 mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => navigate(-1)}
                className={`px-6 py-2 rounded-full text-white font-semibold transition ${
                    theme === 'light' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#28282850] hover:bg-[#282828]'
                }`}
            >
                Go Back Home
            </button>
        </div>
    );
}
