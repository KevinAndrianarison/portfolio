import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContentSelect from "../ReusableComponent/ContentSelect";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    const path = window.location.pathname.split("/").filter(Boolean);
    if (path[0] === "fr" || path[0] === "en") {
      path[0] = lng;
    } else {
      path.unshift(lng);
    }
    window.location.href = path.join("/");
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <label className="ui-switch">
        <input type="checkbox"></input>
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <FontAwesomeIcon
            icon="fa-language"
            className="text-xl cursor-pointer ease-in-out transition-all hover:bg-blue-900 p-2 rounded-lg"
          />
        </DropdownMenuTrigger>
        <ContentSelect
          onclickFr={() => changeLanguage("fr")}
          onclickEn={() => changeLanguage("en")}
        />
      </DropdownMenu>
    </div>
  );
}
