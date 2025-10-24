import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export default function ContentSelect({ onclickFr, onclickEn }) {
  const { t } = useTranslation();
  return (
    <DropdownMenuContent className="rounded-none funnel">
      <DropdownMenuItem
        onClick={onclickFr}
        className="rounded-none cursor-pointer"
      >
        <b className="fr w-4 h-4"></b> {t("fr")}
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={onclickEn}
        className="rounded-none cursor-pointer"
      >
        <b className="en w-4 h-4"></b> {t("en")}
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
