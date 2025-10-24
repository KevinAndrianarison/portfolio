import "./App.css";
import Head from "./Head/Head";
import Description from "./Description/Description";
import NetworkList from "./NetworkList/NetworkList";
import Stacks from "./Stacks/Stacks";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Degree from "./Degree/Degree";
import Footer from "./ReusableComponent/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div className="degrade funnel py-10">
      <div className="flex flex-col gap-20 w-[50vw] max-lg:w-[80vw] mx-auto">
        <div className="flex flex-col gap-5">
          <Header />
          <Head />
          <Description />
          <NetworkList />
        </div>
        <Stacks />
        <Projects />
        <Degree />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
