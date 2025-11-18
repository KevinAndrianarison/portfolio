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
import { ThemeContext } from "./Contexte/ThemeContext";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const path = window.location.pathname.split("/").filter(Boolean);
    const lang = localStorage.getItem("lang");
    if (!lang && path[0] !== "en" && path[0] !== "fr") {
      window.location.replace("/en");
    }
  }, []);

  return (
    <div
      className={`${
        theme === "dark" ? "degradeDark" : "degradeLight"
      } funnel py-10`}
    >
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
