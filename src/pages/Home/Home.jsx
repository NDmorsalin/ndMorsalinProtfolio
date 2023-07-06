import { Element } from "react-scroll";
import Avatar from "../../components/Avatar/Avatar";
import Terminal from "../../components/Terminal/Terminal";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Element name="home" className="element" />
      <div className="w-full h-20"></div>
      <div className="py-8 flex items-center justify-between flex-col gap-8 md:flex-row w-full">
        <Terminal />
        <Avatar />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
