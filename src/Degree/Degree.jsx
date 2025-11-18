import { useTranslation } from "react-i18next";
import { ThemeContext } from "../Contexte/ThemeContext";
import { useContext } from "react";

export default function Degree() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const degrees = [
    {
      year: "2025",
      title: t("master"),
      desc: t("esp"),
    },
    {
      year: "2024",
      title: t("delf"),
      desc: t("alliance"),
    },
    {
      year: "2022",
      title: t("licence"),
      desc: t("esp"),
    },
    {
      year: "2018",
      title: t("bac"),
      desc: t("lycee"),
    },
  ];

  return (
    <section
      className={`${
        theme === "dark" ? "" : "text-gray-800"
      } flex flex-col gap-5`}
    >
      <h1 className="text-3xl aref font-bold">{t("diplomas")}</h1>

      <div className="relative border-l-4 border-blue-500">
        {degrees.map((item, index) => (
          <div
            key={index}
            className="mb-5 ml-6 flex flex-col gap-2 relative group cursor-pointer"
          >
            <div
              className={`${
                theme === "dark" ? "border-gray-700" : "border-white"
              } absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4  group-hover:bg-blue-500 transition-all`}
            />
            <div
              className={`${
                theme === "dark" ? "bg-gray-700 border-2" : "bg-white"
              } p-5  border-gray-600`}
            >
              <h2 className="text-lg font-semibold text-blue-500">
                {item.year}
              </h2>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } text-sm leading-relaxed mt-2`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
