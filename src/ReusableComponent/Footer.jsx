import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../Contexte/ThemeContext";

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "" : "text-gray-800 font-bold"} text-sm text-center flex flex-col gap-2`}>
      <h1>034 18 622 19 | Madagascar</h1>
      <p>
        © {new Date().getFullYear()} {t("developpe")} ❤️ {t("par")}{" "}
        ANDRIANARISON Steeve Kevin{" "}
      </p>
    </div>
  );
}
