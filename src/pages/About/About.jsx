import { FaUser } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Element } from "react-scroll";
import myImg from "../../assets/img.jpg";
import TiltContainer from "../../components/TiltContainer/TiltContainer";

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
        <TiltContainer>
          <div className="w-full md:w-64 overflow-hidden">
            <img
              src={myImg}
              alt=""
              className="object-cover w-full rounded-md "
            />
          </div>
        </TiltContainer>
        <div className="w-full md:flex-1 space-y-4">
          <div className=" bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-100">
              Hi, I&apos;m Nd Morsalin
            </h1>
            <p className="">
              A highly motivated and dedicated Frontend Developer with a strong
              passion for creating exceptional user experiences. Specializing in
              the React framework, I have extensive experience in developing
              dynamic and responsive web applications.
            </p>
          </div>
          <div className=" bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg">
            <p className="">
              My journey in the rld of web development began with a deep
              curiosity for the underlying technologies that power the internet.
              Over time, I immersed myself in learning and mastering the React
              ecosystem, including its component-based architecture and virtual
              DOM. This knowledge has empowered me to build elegant and
              efficient web applications that seamlessly adapt to various
              devices and screen sizes.
            </p>
          </div>
          <div className=" bg-[#0F172A]/90 text-white p-4 rounded-lg shadow-lg">
            <p className="">
              Collaboration is at the core of my development philosophy. I
              thrive in multidisciplinary teams, valuing effective communication
              and a shared vision to deliver outstanding results. I actively
              seek opportunities to learn from others and stay updated with the
              latest industry trends and best practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
