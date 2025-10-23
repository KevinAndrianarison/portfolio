import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl aref font-bold">Discutons</h1>
      <div className="border-2 border-gray-600 bg-gray-700 p-4 py-6 flex flex-col gap-5 items-center">
        <FontAwesomeIcon
          icon="fa-regular fa-envelope"
          className="text-xl bg-blue-800 p-3 rounded border-2 border-blue-700 px-2.5"
        />
        <h1 className="text-2xl text-center font-bold">Entrer en contact</h1>
        <p className="mx-20 max-lg:mx-0 text-center text-gray-300">
          Prêt à démarrer un projet ou simplement envie de dire bonjour ? Je
          suis toujours ouvert aux nouvelles opportunités et collaborations.
        </p>
        <div
          onClick={() =>
            window.open("mailto:kevinandrianarison25@gmail.com", "_blank")
          }
          className="bg-blue-800 p-2 rounded-lg text-sm flex items-center cursor-pointer"
        >
          <p className="truncate">kevinandrianarison25@gmail.com</p>
          <FontAwesomeIcon icon="fa-paper-plane" className="ml-2" />
        </div>
      </div>
    </div>
  );
}
