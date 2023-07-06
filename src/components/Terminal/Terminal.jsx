import { useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/NdMorsalin'sResume.pdf";
import { FaDownload } from "react-icons/fa";

const Terminal = () => {
  const [text] = useTypewriter({
    /* Config */
    words: [
      "Full Stack Developer",
      "Backend Web developer",
      "MERN Stack Developer",
      "Web Designer",
      "Frontend Developer",
    ],
  });

  return (
    <>
      <div className="w-full md:w-3/5 min-h-max  bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg ">
        <div className="h-full rounded-lg">
          <div className="h-full p-2 overflow-auto">
            <h2 className="text-4xl font-bold ">
              <span className="bg-gradient-to-r  from-pink-600 to-accent bg-clip-text text-transparent">
                {" "}
                Hello,{" "}
              </span>{" "}
              I&apos;m Nd Morsalin{" "}
              <span className="bg-gradient-to-r block from-pink-600 to-accent bg-clip-text  text-5xl text-transparent">
                A {text}
              </span>{" "}
              from{" "}
              <span className="bg-gradient-to-r  from-red-600 to-green-600 bg-clip-text  text-4xl text-transparent">
                Bangladesh
              </span>
              .
            </h2>
          </div>
        </div>
        <div className="text-center ">
          <a
            href={resume}
            download="Nd Morsalin's Resume"
            className="btn btn-outline hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full mt-6  w-fit "
          >
            <span className="flex items-center justify-center gap-4 text-white ">
              {" "}
              <FaDownload className="text-2xl" /> Resume
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Terminal;
