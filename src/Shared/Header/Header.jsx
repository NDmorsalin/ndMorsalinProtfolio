// "use client";

// import Link from "next/link";
// import ButtonAsLink from "./ButtonAsLink";
import resume from "../../assets/NdMorsalin'sResume.pdf";

import { Link as ScrollLink, Events } from "react-scroll";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import navItems from "../../utility/navItems";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen]);

  const handleClickTwo = useCallback(() => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    } else {
      return;
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      // console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="hidden md:flex h-20 justify-between items-center border-b border-light/10 bg-[#0F172A]/95 shadow-xl fixed top-0 left-0 right-0 z-[100]"
      >
        {/* INNER HEADER */}
        <div className="wrapper flex justify-between items-center">
          {/* LOGO */}
          <div className="left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
              className="logo flex items-center gap-2"
            >
              <ScrollLink
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="home"
                className="cursor-pointer linear-flow text-white text-2xl flex items-center gap-2"
              >
                <Logo />
              </ScrollLink>
            </motion.div>
          </div>

          {/* MIDDLE NAV */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="mid py-2 px-10 border border-light/10 rounded-full bg-black/10 backdrop-blur-xl hover:px-20 duration-500 shadow-xl"
          >
            <nav className="flex gap-5 text-white">
              {navItems.map((item, index) => (
                <li key={index} className="list-none">
                  <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to={item.path.toLowerCase()}
                    className="linear-flow cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </nav>
          </motion.div>

          {/* RIGHT NAV */}
          <div className="right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.9 }}
            >
              <a
                href={resume}
                download="Nd Morsalin's resume"
                className="btn  btn-outline hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full "
              >
                <span className="flex items-center justify-center gap-4 text-white ">
                  {" "}
                  <FaDownload className="text-2xl" /> Resume
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="md:hidden  flex h-20 w-full justify-between items-center border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100] px-8"
      >
        {/* INNER HEADER */}
        {/* <div className="wrapper flex justify-between items-center"> */}
        {/* LOGO */}
        <div onClick={handleClickTwo} className="">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
            className="logo flex items-center gap-2"
          >
            <Link
              to="/"
              className="linear-flow text-white text-2xl flex items-center gap-2"
            >
              <Logo />
            </Link>
          </motion.div>
        </div>
        {/* TOGGLE BUTTON */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
            onClick={handleClick}
            className="right flex flex-col gap-2 cursor-pointer"
          >
            <span
              className={clsx(
                "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                isMobileNavOpen ? "rotate-[45deg]" : "rotate-[0deg]"
              )}
            ></span>
            <span
              className={clsx(
                "bg-light w-4 h-[2px] rounded-full duration-500",
                isMobileNavOpen ? "translate-x-[100vw]" : "translate-x-0"
              )}
            ></span>
            <span
              className={clsx(
                "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                isMobileNavOpen ? "rotate-[-45deg]" : "rotate-[0deg]"
              )}
            ></span>
          </motion.div>
        </div>
        {/* </div> */}
      </motion.header>
      {/* FIXED NAV MODAL */}
      <div
        onClick={handleClick}
        className={clsx(
          "fixed bg-accent top-0 left-0 right-0 bottom-0 h-screen w-screen z-[98] duration-700",
          isMobileNavOpen
            ? "translate-y-0 rounded-bl-[0px]"
            : "translate-y-[-100vh] rounded-bl-full"
        )}
      >
        <div
          className={clsx(
            "fixed bg-dark top-0 left-0 right-0 bottom-0 h-screen w-screen z-[99] duration-1000 flex justify-center items-center",
            isMobileNavOpen
              ? "translate-y-0 rounded-bl-[200px]"
              : "translate-y-[-100vh] rounded-bl-full"
          )}
        >
          <nav className="flex flex-col gap-5 text-4xl">
            {navItems.map((item, index) => (
              <div key={item + index} className="overflow-hidden">
                <motion.li
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.65, delay: 0.1 }}
                  className="list-none"
                >
                  <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to={item.path.toLowerCase()}
                    className="linear-flow cursor-pointer text-white"
                  >
                   <button className="" onClick={handleClick}>
                   {item.name}
                   </button>
                  </ScrollLink>
                </motion.li>
              </div>
            ))}

            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.6 }}
                className="list-none"
              >
                <Link
                  to="https://drive.google.com/file/d/15ZGtWECz29fx9HgEk5QLCQUB6GCVqdcL/view?usp=sharing"
                  target="_blank"
                  className="hover:text-accent duration-500 text-white border border-cyan-500 btn btn-outline hover:bg-slate-900/50 hover:border-pink-500 rounded-full"
                >
                  Resume
                </Link>
              </motion.li>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
