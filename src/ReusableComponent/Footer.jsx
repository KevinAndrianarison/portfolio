import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="text-sm text-center flex flex-col gap-2">
      <h1>034 18 622 19 | Madagascar</h1>
      <p>
        © {new Date().getFullYear()} {t("developpe")} ❤️ {t("par")}{" "}
        ANDRIANARISON Steeve Kevin{" "}
      </p>
    </div>
  );
}
