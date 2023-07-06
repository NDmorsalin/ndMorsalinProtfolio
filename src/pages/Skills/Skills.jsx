import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUser } from "react-icons/fa";
import { Element } from "react-scroll";
import TiltContainer from "../../components/TiltContainer/TiltContainer";
const skills = [
  {
    img: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    text: "HTML",
  },
  { img: "https://img.icons8.com/color/48/000000/css3.png", text: "CSS" },
  {
    img: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    text: "JS",
  },
  {
    img: "https://img.icons8.com/color/48/000000/react-native.png",
    text: "React",
  },
  { img: "https://img.icons8.com/color/48/000000/nodejs.png", text: "Node" },
  {
    img: "https://img.icons8.com/color/48/000000/mongodb.png",
    text: "MongoDB",
  },
  { img: "https://img.icons8.com/color/48/000000/git.png", text: "Git" },
  {
    img: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    text: "VS Code",
  },
  {
    img: "https://img.icons8.com/color/48/000000/figma--v1.png",
    text: "Figma",
  },
  {
    img: "https://img.icons8.com/color/48/000000/github--v1.png",
    text: "Github",
  },
  { img: "https://graphql.org/img/logo.svg", text: "GaraphQl" },
  {
    img: "http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg",
    text: "Bootstraps",
  },
  {
    img: "https://react-bootstrap.github.io/img/logo.svg",
    text: "React Bootstrap",
  },
  {
    img: "https://img.icons8.com/color/48/tailwind_css.png",
    text: "Tailwind css",
  },
  {
    img: "https://img.icons8.com/color/48/cloud-firestore.png",
    text: "Firestore",
  },
  { img: "https://img.icons8.com/color/48/firebase.png", text: "Firebase" },
  {
    img: "http://expressjs.com/images/express-facebook-share.png",
    text: "ExpressJS ",
  },
  { img: "http://jwt.io/img/pic_logo.svg", text: "JWT " },
  {
    img: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
    text: "Adobe XD ",
  },
  {
    img: "https://th.bing.com/th/id/R.28bbfc28589429de076389530f951586?rik=Q8WQd8BgRESyKQ&pid=ImgRaw&r=0",
    text: "Next Js ",
  },
  { img: "https://img.icons8.com/color/48/000000/redux.png", text: "Redux" },
  {
    img: "http://img.icons8.com/color/48/000000/typescript.png",
    text: "TypeScript",
  },
];
const Skills = () => {
  return (
    <div className="my-8">
      <Element name="skills" className="element" />
      <div className="w-full h-20"></div>
      <SectionTitle
        Icon={FaUser}
        subtitle={"I am expert in under mention technologies"}
        title={"My Skills"}
      />
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8  mt-8">
        {skills.map((skill) => (
          <TiltContainer key={skill.text}>
            {" "}
            <div className="text-center p-3 rounded-lg bg-[#0F172A]/30 hover:bg-[#0F172A]/80">
              <div className="w-20 mx-auto">
                <img className="w-full" src={skill.img} />
              </div>
              <p className="text-center text-3xl text-white font-bold">
                {skill.text}
              </p>
            </div>{" "}
          </TiltContainer>
        ))}
      </div>
    </div>
  );
};

export default Skills;
