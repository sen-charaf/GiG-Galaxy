import { Link } from "react-router-dom";
import logo from "../assets/Gig Galaxy (1).png";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="header-container"> {/* Ajout de la classe CSS "header-container" */}
      <div className="flex justify-center items-center">
        <img alt="" className="h-80 w-50" src={logo} />
      </div>
      <h2 className="text-center text-3xl font-extrabold text-blue-900">
        {heading}
      </h2>

      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
