import Project from "../ReusableComponent/Project";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../Contexte/ThemeContext";
import { useContext } from "react";


export default function Projects() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "" : "text-gray-800"} flex flex-col gap-5`}>
      <h1 className="text-3xl aref font-bold">{t("recentProjects")}</h1>
      <div className="flex gap-5 flex-wrap">
        <Project
          name="E-laharagna"
          img="elaharagna"
          description={t("elaharagna")}
          status={t("finished")}
          stacks={[
            { name: "ReactJs", logo: "react" },
            { name: "Laravel", logo: "laravel" },
            { name: "MySQL", logo: "mysql" },
          ]}
        />
        <Project
          name="OTIV-Diana"
          img="otivdiana"
          link="https://otiv.irislan.mg"
          description={t("otivdiana")}
          status={t("inProgress")}
          stacks={[
            { name: "NextJs", logo: "next" },
            { name: "Laravel", logo: "laravel" },
            { name: "MySQL", logo: "mysql" },
          ]}
        />
        <Project
          name="GDS"
          img="gds"
          link="https://gds-front.ongsahi.org"
          description={t("gds")}
          status={t("finished")}
          stacks={[
            { name: "ReactJs", logo: "react" },
            { name: "Laravel", logo: "laravel" },
            { name: "MySQL", logo: "mysql" },
          ]}
        />
        <Project
          name="SendBazar"
          img="sendBazar"
          link="https://sendbazar.com"
          description={t("sendBazar")}
          status={t("finished")}
          stacks={[
            { name: "NextJs", logo: "next" },
            { name: "Laravel", logo: "laravel" },
            { name: "MySQL", logo: "mysql" },
          ]}
        />
      </div>
    </div>
  );
}
