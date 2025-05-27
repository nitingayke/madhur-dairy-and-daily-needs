import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon
} from "@mui/icons-material";
import PropTypes from "prop-types"

export default function QuestionAnswer({ question, answer }) {
    const { theme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    if(!question || !answer) return null;

    return (
        <div
            className={`mb-4 rounded-lg overflow-hidden transition-all duration-200 ${theme === 'light'
                    ? 'bg-white border border-gray-200 shadow-sm'
                    : 'bg-[#282828] border border-gray-700 shadow-sm'
                }`}
        >
            <button
                onClick={toggleExpand}
                className={`w-full flex justify-between items-center p-4 text-left ${theme === 'light'
                        ? 'bg-gray-100 hover:bg-gray-200'
                        : 'hover:bg-[#333333]'
                    }`}
                aria-expanded={isExpanded}
                aria-controls={`faq-content-${question}`}
            >
                <h3 className={`text-lg font-medium ${theme === 'light'
                        ? 'text-gray-800'
                        : 'text-gray-100'
                    }`}>
                    {question}
                </h3>
                {isExpanded ? (
                    <ExpandLessIcon className={
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    } />
                ) : (
                    <ExpandMoreIcon className={
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    } />
                )}
            </button>

            <div
                id={`faq-content-${question}`}
                className={`transition-all duration-200 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className={`p-4 ${theme === 'light'
                        ? 'text-gray-600'
                        : 'text-gray-300'
                    }`}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

QuestionAnswer.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
}