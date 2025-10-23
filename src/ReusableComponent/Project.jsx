import Container from "./Container";

export default function Project({ name, description, status, stacks, img }) {
  return (
    <div className="border-2 cursor-pointer hover:border-[#FF9800] border-gray-600 bg-gray-700 w-[24vw] justify-between p-4 flex flex-col gap-4">
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
      <div className="flex gap-2">
       {stacks.map((stack) => (
         <Container logo={stack.logo} name={stack.name} isStack stackonProject />
       ))}
      </div>
    </div>
  );
}
