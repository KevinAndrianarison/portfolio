import { useTranslation } from "react-i18next";

export default function Degree() {
  const { t } = useTranslation();
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
    <section className="flex flex-col gap-5">
      <h1 className="text-3xl aref font-bold">{t("diplomas")}</h1>

      <div className="relative border-l-4 border-blue-500">
        {degrees.map((item, index) => (
          <div
            key={index}
            className="mb-5 ml-6 flex flex-col gap-2 relative group cursor-pointer"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-700 group-hover:bg-blue-500 transition-all" />
            <div className="bg-gray-700 p-5 border-2 border-gray-600">
              <h2 className="text-lg font-semibold text-blue-500">
                {item.year}
              </h2>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
