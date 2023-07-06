/* eslint-disable react/jsx-no-target-blank */

import { useState } from "react";
import { FaCode, FaEye, FaEyeSlash, FaLink } from "react-icons/fa";
import TiltContainer from "../TiltContainer/TiltContainer";
import ReactCardFlip from "react-card-flip";

const ProjectsCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <TiltContainer key={project.id}>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipSpeedBackToFront={2}
          flipSpeedFrontToBack={2}
          // flipDirection="vertical"
        >
          <div
            className="w-full max-h-fit bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg  group relative z-10"
            style={{ boxShadow: "8px 8px 0px 0px rgba(36, 98, 231, 0.5)" }}
          >
            <div className="w-full h-[220px] md:h-[300px] overflow-hidden rounded">
              <img
                className="w-full object-cover group-hover:-translate-y-[69%] duration-[5000ms]"
                src={project.img}
                alt={project?.title}
              />
            </div>
            <div className="mt-3 ">
              <h1 className="text-lg lg:text-xl font-bold gradient-text">
                {project?.title}
                <span className="text-sm"> (Full Stack Project)</span>
              </h1>

              <div className="mt-3 flex items-center gap-2 flex-wrap justify-center">
                <a href={project.link} target="_blank">
                  <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit flex items-center gap-1">
                    <FaLink /> Live
                  </button>
                </a>
                {project?.client && (
                  <a href={project?.client} target="_blank">
                    <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit  flex items-center gap-1">
                      <FaCode /> Client
                    </button>
                  </a>
                )}
                {project?.server && (
                  <a href={project?.server} target="_blank">
                    <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit   flex items-center gap-1">
                      <FaCode /> Server
                    </button>
                  </a>
                )}

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit   flex items-center gap-1"
                >
                  <FaEye /> Details
                </button>
              </div>
            </div>
          </div>

          {/* project details */}
          <div
            className="w-full max-h-fit bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg  group relative z-10"
            style={{ boxShadow: "8px 8px 0px 0px rgba(36, 98, 231, 0.5)" }}
          >
            <h1 className="text-lg lg:text-xl font-bold gradient-text">
              {project.title}
            </h1>
            <p className="text-sm">{project.description}</p>
            <h3 className="text-base lg:text-lg font-bold gradient-text">Feature </h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature) => (
                <li key={feature} className="text-sm ml-2">{feature}</li>
              ))}
            </ul>
            <div className="mt-2">
            <h3 className="text-base lg:text-lg font-bold gradient-text">Technology </h3>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                {project?.technology?.map((tech) => (
                    <span
                      key={tech}
                        className="text-xs bg-slate-800 px-2 py-1 rounded-full"
                        >
                        {tech}
                    </span>
                ))}
                
                </div>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <a
                  href="https://mastery-karate-client.web.app/"
                  target="_blank"
                >
                  <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit flex items-center gap-1">
                    <FaLink /> Live
                  </button>
                </a>
                <a
                  href="https://github.com/NahidAhmed47/masteryKarate-client"
                  target="_blank"
                >
                  <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit  flex items-center gap-1">
                    <FaCode /> Client
                  </button>
                </a>
                <a
                  href="https://github.com/NahidAhmed47/masteryKarate-server"
                  target="_blank"
                >
                  <button className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit   flex items-center gap-1">
                    <FaCode /> Server
                  </button>
                </a>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="text-white px-3 py-1  border  text-sm  duration-300 hover:-rotate-2 hover:bg-primary  hover:scale-95 hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full w-fit   flex items-center gap-1"
                >
                  <FaEyeSlash /> Back
                </button>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </TiltContainer>
    </>
  );
};

export default ProjectsCard;
