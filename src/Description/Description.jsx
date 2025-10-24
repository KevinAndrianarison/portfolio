import { Highlighter } from "../components/ui/highlighter";
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();

  return (
    <div>
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
