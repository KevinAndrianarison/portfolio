import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../Contexte/ThemeContext";

export default function Container({
  icon,
  name,
  isStack,
  logo,
  stackonProject,
  link,
}) {
  const CustomElement = link ? "a" : "div";
  const { theme } = useContext(ThemeContext);

  return (
    <CustomElement
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className={`${
        isStack
          ? "bg-gray-700 border border-gray-600"
          : "bg-gray-600 hover:bg-gray-700"
      } inline-flex items-center px-4 py-1 cursor-pointer ${
        stackonProject ? "text-xs" : ""
      } ${theme === "dark" ? "" : "text-gray-800 !bg-gray-300 border-0"}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {logo && <div className={`mr-2 ${logo} logo h-5 w-5`}></div>}
      <p>{name}</p>
    </CustomElement>
  );
}
