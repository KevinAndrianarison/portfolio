import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Container({
  icon,
  name,
  isStack,
  logo,
  stackonProject,
  link,
}) {
  const CustomElement = link ? "a" : "div";

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
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {logo && <div className={`mr-2 ${logo} logo h-5 w-5`}></div>}
      <p>{name}</p>
    </CustomElement>
  );
}
