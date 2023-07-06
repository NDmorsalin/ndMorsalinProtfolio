/* eslint-disable react/jsx-no-target-blank */
import { Element } from "react-scroll";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUser } from "react-icons/fa";
import redhimedu from "../../assets/FireShot Capture 002 - RhythmEdu - Home - rhythmedu-d7728.web.app.png";
import khelagor from "../../assets/khelagor.png"
import movieStand from "../../assets/movie.png"
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
const projects = [
  {
    id: 1,
    title: "RhythmEdu",
    img: redhimedu,
    link: "https://rhythmedu-d7728.web.app/",
    server: "https://github.com/NDmorsalin/rhythmedu-a12-server",
    client: "https://github.com/NDmorsalin/rhythmedu-a12-client",
    description:
      "This is a course-purchasing website where the authentic user has a student, Instructor, or Admin role.",
    features: [
      "Students select, delete selected classes, and make payments, see enrolled and payment history.",
      "Instructor can add, delete, update classes, and see classes, and enrolled student numbers.",
      "Admin can approve, feedback to instructor classes, change the role of users as admin, or instructor",
    ],
    technology: [
      "React",
      "firebase",
      "react-router-dom",
      "sweetalert",
      "Tailwind",
      "react-hook-form",
      "swiper",
      "technology",
      "stripe",
      "nodejs",
      "express",
      "MongoDB",
      "dotenv",
      "axios",
      "jsonwebtoken",
      "cookie-parser",
    ],
  },
  {
    id: 2,
    title: "khelagor",
    img: khelagor,
    link: "https://khelagor-1602a.web.app/",
    server: "https://github.com/NDmorsalin/toymarketplaceKhelagor-backend",
    client: "https://github.com/NDmorsalin/toymarketplaceKhelagor-frontend",
    description:
      "Toy Marketplace with Dolls category allows users to add, delete, and update dolls.",
    features: [
      " Firebase authentication and JWT authorization sys implemented to enhance the security.",
      "User can log in, register by email, password, Or Google. Invalid jwt user redirects to the login page.",
      "User can see all dolls, Single dolls, Add new dolls, can update and delete their added Doll.",
    ],
    technology: [
      "React",
      "AOS",
      "Lottie-react",
      "firebase",
      "react-router-dom",
      "react-tabs",
      "sweetalert",
      "Tailwind",
      "daisyui",
      "swiper",
      "ExpressJS",
      "MongoDB",
      "cookie-parser",
      "cors",
      "jsonwebtoken.",
    ],
  },
  {
    id: 3,
    title: "MovieStand",
    img: movieStand,
    link: "https://647cbcbd1899ac4a7895a615--superb-hotteok-804e7b.netlify.app/",
    server: "",
    client: "https://github.com/NDmorsalin/quadbtechtask",
    description:
      "On this website, users can see the movie list and book seats and get ticket numbers.",
    features: [
      "On the home page responsive slider, then click on the details button to go to Movie details page.",
      "On Theatre page see Screen and seats. Clicking on seat store on localstorage and confirm ticket.",
      "On Booked page see booked Movie list, seat number, ticket id.",
    ],
    technology: [
      "React",
      "AOS",
      "Lottie-react",
      "firebase",
      "react-router-dom",
      "react-tabs",
      "sweetalert",
      "Tailwind",
      "daisyui",
      "swiper",
      "ExpressJS",
      "MongoDB",
      "cookie-parser",
      "cors",
      "jsonwebtoken.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="my-8 ">
      <Element name="projects" className="element" />
      <div className="w-full h-24"></div>
      <SectionTitle
        Icon={FaUser}
        subtitle={"My Projects what i recently done"}
        title={"My Projects"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8">
        {projects.map((project) => (
          <ProjectsCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
