import Container from "../ReusableComponent/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContentSelect from "../ReusableComponent/ContentSelect";
import cvFr from "../assets/CV_ANDRIANARISON_Steeve Kevin.pdf";
import { useTranslation } from "react-i18next";

export default function NetworkList() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <Container
          icon="fa-brands fa-linkedin"
          name="LinkdIn"
          link="https://www.linkedin.com/in/andrianarison-steeve-kevin-375616289"
        />
        <Container
          icon="fa-brands fa-github"
          name="GitHub"
          link="https://github.com/KevinAndrianarison"
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <p className="bg-blue-800 p-1.5 px-8 cursor-pointer border-2 border-blue-600 rounded-full">
              <FontAwesomeIcon icon="fa-download" /> {t("cv")}
            </p>
          </DropdownMenuTrigger>
          <ContentSelect onclickFr={() => window.open(cvFr, "_blank")} />
        </DropdownMenu>
      </div>
    </div>
  );
}
