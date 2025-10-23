import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({
  name,
  description,
  status,
  stacks,
  img,
  link,
}) {
  return (
    <div className="border-2 cursor-pointer hover:border-[#FF9800] border-gray-600 bg-gray-700 w-[24vw] max-lg:w-[80vw] justify-between p-4 flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-sm border px-2 border-gray-600 text-gray-300">
          {status}
        </p>
      </div>
      <div className="text-sm text-gray-300 flex flex-col gap-2">
        <div className={`bg-gray-500 h-40 ${img}`}></div>
        <p>{description}</p>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex gap-2 flex-wrap">
          {stacks.map((stack, index) => (
            <Container
              key={index}
              logo={stack.logo}
              name={stack.name}
              isStack
              stackonProject
            />
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon="fa-arrow-up-right-from-square"
              className="text-lg hover:text-[#FF9800]"
            />
          </a>
        )}
      </div>
    </div>
  );
}
