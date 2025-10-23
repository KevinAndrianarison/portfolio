import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContentSelect from "../ReusableComponent/ContentSelect";

export default function Header() {
  return (
    <div className="flex justify-end items-center gap-4">
      <label className="ui-switch">
        <input type="checkbox"></input>
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
      <DropdownMenu >
        <DropdownMenuTrigger className="focus:outline-none">
          <FontAwesomeIcon
            icon="fa-language"
            className="text-xl cursor-pointer ease-in-out transition-all hover:bg-blue-900 p-2 rounded-lg"
          />
        </DropdownMenuTrigger>
        <ContentSelect />
      </DropdownMenu>
    </div>
  );
}
