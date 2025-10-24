import { useTranslation } from "react-i18next";

export default function Head() {
  const { t } = useTranslation();
  return (
    <div className="flex gap-5 flex-wrap">
      <div className="h-20 w-20 bg-gray-100 profil rounded-2xl"></div>
      <div className="flex flex-col justify-end">
        <p className="text-lg">{t("title")}</p>
        <p className="text-3xl aref font-bold">{t("subtitle")}</p>
      </div>
    </div>
  );
}
