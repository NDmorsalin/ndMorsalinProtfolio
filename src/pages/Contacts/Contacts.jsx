import { Element } from "react-scroll";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaUser } from "react-icons/fa";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsGithub,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-8">
      <Element name="contact" className="element" />
      <div className="w-full h-24"></div>
      <SectionTitle
        Icon={FaUser}
        subtitle={"There are many ways to contact me"}
        title={"My contact Info"}
      />

      <div id="contact" className="max-container mb-28 xl:px-0 md:px-7 px-5">
        <div className="grid md:grid-cols-2 mt-14 align-items-center gap-8">
          <div className="w-full h-fit space-y-4 flex flex-col justify-between bg-[#0F172A]/50 p-4  md:p-8 rounded-lg">
            <h1 className="text-white text-xl md:text-2xl font-bold">
              Contact Information -
            </h1>
            <p className="text-sm font-medium text-gray-300">
              Let&apos;s talk how I can help you to grow your business. I
              appreciate any kind of suggestions or feedback.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50 bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsFillGeoAltFill className="w-3 h-3 text-white  duration-500"></BsFillGeoAltFill>
              </div>
              <p>Chandpur,Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50 bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsTelephoneFill className="w-3 h-3 text-white  duration-500"></BsTelephoneFill>
              </div>
              <p>Contact/WhatsApp: +880 1646-653053</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50  bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsFillEnvelopeFill className="w-4 h-4 text-white duration-500"></BsFillEnvelopeFill>
              </div>
              <p>ndmorsalin99@gmail.com</p>
            </div>
            <Link to={'https://github.com/NDmorsalin'} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50  bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsGithub className="w-4 h-4 text-white duration-500"></BsGithub>
              </div>
              <p className="text-cyan-500">github.com/NDmorsalin</p>
            </Link>
            <Link to={'https://web.facebook.com/NDMorsalin/'} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50  bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsFacebook className="w-4 h-4 text-white duration-500"></BsFacebook>
              </div>
              <p className="text-cyan-500">facebook.com/NDMorsalin</p>
            </Link>
            <Link to={'https://linkedin.com/in/ndmorsalin'} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="p-2 rounded-full bg-slate-500/50  bg-opacity-40 group-hover:bg-primary duration-500 w-fit">
                <BsLinkedin className="w-4 h-4 text-white duration-500"></BsLinkedin>
              </div>
              <p className="text-cyan-500">linkedin.com/in/ndmorsalin</p>
            </Link>
            <div className="w-full h-full ">
              {/* <img src={contactImg} className="w-3/5 h-auto mx-auto md:ml-0" alt="" /> */}
            </div>
          </div>
          <div>
            <form
              className="space-y-4  bg-[#0F172A]/50  p-8 rounded-lg"
              onClick={handleSubmit}
            >
              <div>
                <p className="text-base font-medium text-white ml-1 mb-1">
                  Name:
                </p>
                <input
                  type="text"
                  name="from_name"
                  className="rounded-md h-12 px-3 md:px-5 outline-none text-white  bg-[#0F172A]/50 w-full"
                  placeholder="Name"
                  autoComplete="off"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                ></input>
              </div>
              <div>
                <p className="text-base font-medium text-white ml-1 mb-1">
                  Email:
                </p>
                <input
                  type="email"
                  name="from_email"
                  className="rounded-md h-12 px-3 md:px-5 outline-none text-white  bg-[#0F172A]/50 w-full"
                  placeholder="Email"
                  autoComplete="off"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                ></input>
              </div>
              <div>
                <p className="text-base font-medium text-white ml-1 mb-1">
                  Subject:
                </p>
                <input
                  type="text"
                  name="subject"
                  className="rounded-md h-12 px-3 md:px-5 outline-none text-white  bg-[#0F172A]/50 w-full"
                  placeholder="Subject"
                  autoComplete="off"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                ></input>
              </div>
              <div>
                <p className="text-base font-medium text-white ml-1 mb-1">
                  Message:
                </p>
                <textarea
                  name="message"
                  className="rounded-md h-40 p-3 md:p-5 outline-none text-white  bg-[#0F172A]/50 w-full"
                  placeholder="Your Message"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white btn btn-outline hover:bg-transparent border-pink-500 hover:border-blue-600 rounded-full mt-6  w-fit block mx-auto "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
