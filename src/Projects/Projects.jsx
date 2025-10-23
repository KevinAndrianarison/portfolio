import Project from "../ReusableComponent/Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl aref font-bold">Projects</h1>
      <div className="flex gap-5 flex-wrap">
        <Project
          name="E-laharagna"
          img="elaharagna"
          description="
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident quos harum explicabo voluptatibus quis soluta atque, consequatur possimus animi rerum, adipisci ullam earum vitae sequi eos laborum maxime?  "
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
          description="
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident quos harum explicabo voluptatibus quis soluta atque, consequatur possimus animi rerum, adipisci ullam earum vitae sequi eos laborum maxime?  "
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
          description="
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident quos harum explicabo voluptatibus quis soluta atque, consequatur possimus animi rerum, adipisci ullam earum vitae sequi eos laborum maxime?  "
          status="Terminé 🟢"
          stacks={[
            { name: "ReactJs", logo: "react" },
            { name: "Laravel", logo: "laravel" },
            { name: "MySQL", logo: "mysql" },
          ]}
        />
      </div>
    </div>
  );
}
