import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Container({icon, name}) {
  return (
    <div className="bg-gray-600 px-4 py-1 cursor-pointer hover:bg-gray-700 inline-flex items-center">
      <p><FontAwesomeIcon icon={icon} className="mr-1" /></p>
      <p>{name}</p>
    </div>
  );
}
