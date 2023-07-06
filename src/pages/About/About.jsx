import { FaUser } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Element } from "react-scroll";
import myImg from "../../assets/img.jpg";

const About = () => {
  return (
    <div className="scroll-m-20">
      <Element name="about" className="" />
      <div className="w-full h-24"></div>
      <SectionTitle
        Icon={FaUser}
        subtitle={"Here is all about my self"}
        title={"About me"}
      />

      <div className="flex justify-around gap-12 mt-14 flex-col md:flex-row">
        <div className="w-full md:w-64 rounded-md overflow-hidden">
          <img src={myImg} alt="" className="object-cover w-full" />
        </div>{" "}
        <div className="w-full md:w-1/2 space-y-4">
          <div className=" bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Hi, I&apos;m Nd Morsalin
            </h1>
          </div>
          <div className=" bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg">
            <p className="">
            Highly motivated and dedicated Frontend Developer with a strong focus on the React framework. With adeep understanding of React&apos;s component-based architecture and virtual DOM, I have successfully developed and delivered dynamic and responsive web applications.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
