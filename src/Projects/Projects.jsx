import Project from "../ReusableComponent/Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl aref font-bold">Mes récentes réalisations</h1>
      <div className="flex gap-5 flex-wrap">
        <Project
          name="E-laharagna"
          img="elaharagna"
          description="Application de gestion de file d’attente pour organiser les tickets dans les
agences de l’OTIV Diana."
          status="En cours 🔄"
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
          description="Site web de l’OTIV Diana, mettant en avant
les informations et les services proposés."
          status="En cours 🔄"
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
          description="Application de gestion de stock pour
l’ONG Sahi."
          status="Terminé 🟢"
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
          description="Refonte complète du site web de SendBazar, migration de la
version v1 sous WordPress vers une version v2 développée avec Next.js."
          status="Terminé 🟢"
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
