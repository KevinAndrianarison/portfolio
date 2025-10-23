import "./App.css";
import Head from "./Head/Head";
import Description from "./Description/Description";
import NetworkList from "./NetworkList/NetworkList";
import Stacks from "./Stacks/Stacks";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="degrade funnel py-10">
      <div className="flex flex-col gap-20 w-[50vw] mx-auto">
        <div className="flex flex-col gap-5">
          <Head />
          <Description />
          <NetworkList />
        </div>
        <Stacks />
        <Projects />
      </div>
    </div>
  );
}

export default App;
