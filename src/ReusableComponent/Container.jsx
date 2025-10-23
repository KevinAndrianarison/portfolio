import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Container({ icon, name, isStack, logo }) {
  return (
    <div
      className={`
        ${
          isStack
            ? "bg-gray-700 border border-gray-600"
            : "bg-gray-600 hover:bg-gray-700"
        }
     inline-flex items-center px-4 py-1 cursor-pointer `}
    >
      <p>
        {icon && <FontAwesomeIcon icon={icon} className="mr-1" />}
        {logo && <div className={`mr-1 ${logo} logo h-5 w-5`}></div>}
      </p>
      <p>{name}</p>
    </div>
  );
}
