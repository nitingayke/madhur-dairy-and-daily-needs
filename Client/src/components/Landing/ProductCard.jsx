import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from "prop-types";

export default function ProductCard({ title, description, image, features }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3
          className={`text-lg font-bold ${theme === "light" ? "text-gray-800" : "text-white"
            }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
        >
          {description}
        </p>
        <ul className="space-y-2">
          {features?.map((feature, i) => (
            <li key={i * 0.2} className={`flex items-start ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'
              }`}>
              <span className={`mr-2 ${theme === 'light' ? 'text-amber-500' : 'text-amber-300'}`}><CheckIcon /></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
}