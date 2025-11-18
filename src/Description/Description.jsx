import { Highlighter } from "../components/ui/highlighter";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../Contexte/ThemeContext";

export default function Description() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "" : "text-gray-800"}`}>
      {t("descriptionOne")}
      <Highlighter action="highlight" color="#FF9800">
        <b className="mx-2">JavaScript</b>
      </Highlighter>
      <span className="mx-2">{t("and")}</span>
      <Highlighter action="highlight" color="#FF9800">
        <b className="mx-2">PHP</b>
      </Highlighter>
      . {t("descriptionTwo")}
    </div>
  );
}
