import "./App.css";
import Head from "./Head/Head";
import Description from "./Description/Description";
import NetworkList from "./NetworkList/NetworkList";
import Stacks from "./Stacks/Stacks";

function App() {
  return (
    <div className="degrade funnel h-[100vh] py-10">
      <div className="flex flex-col gap-20 w-[50vw] mx-auto">
        <div className="flex flex-col gap-5">
          <Head />
          <Description />
          <NetworkList />
        </div>
        <div className="flex flex-col gap-5">
          <Stacks />
        </div>
      </div>
    </div>
  );
}

export default App;
