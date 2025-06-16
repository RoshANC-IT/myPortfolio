import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaTelegram,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { FaGithub, FaInstagram } from "react-icons/fa";
function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 md:-my-8 "
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text & Info Section */}
        <div className="md:w-1/2 space-y-8 order-2 md:order-1 mt-10 md:mt-24">
          {/* Header Box */}
          <div
            className="p-6 md:p-8 rounded-[18px] w-full text-gray-800 leading-snug"
            style={{
              background: "#ffffff",
              boxShadow: "18px 18px 36px #b1b1b1, -18px -18px 36px #ffffff",
            }}
          >
            <h1 className="flex flex-col md:flex-row md:flex-wrap items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="mb-2 md:mb-0 md:mr-3 text-gray-700">
                Welcome to my portfolio
              </span>
              <span className="mr-2">Hello, I'm a</span>
              <span
                className="text-red-700 font-bold inline-block"
                style={{ minWidth: "10ch", whiteSpace: "nowrap" }}
              >
                <ReactTyped
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>
          </div>

          {/* Paragraph Box */}
          <div
            className="p-6 md:p-8 rounded-[18px] text-sm sm:text-base md:text-lg text-gray-600 text-justify leading-relaxed"
            style={{
              background: "#ffffff",
              boxShadow: "18px 18px 36px #b1b1b1, -18px -18px 36px #ffffff",
            }}
          >
            <p>
              <b>
                I'm a passionate full-stack developer experienced in creating
                responsive and user-friendly web applications. I enjoy turning
                complex problems into simple, beautiful solutions using modern
                technologies.
              </b>{" "}
            </p>
          </div>

          {/* Socials + Stack */}
          <div className="flex flex-col gap-8 pt-6">
            {/* Social Icons Section */}
            <div className="space-y-4 text-center">
              <h2 className="font-bold text-lg">Available on</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/RoshANC-IT",
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: "https://www.linkedin.com/in/roshan-chauhan-IT/",
                    color: "hover:text-blue-500",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/r_o_s_h_a_n_9_4_2_0/",
                    color: "hover:text-red-600",
                  },
                  {
                    icon: <FaTelegram />,
                    link: "https://t.m/",
                    color: "hover:text-blue-400",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-4 rounded-[44px] text-2xl transition ${item.color}`}
                    style={{
                      background: "#ffffff",
                      boxShadow: "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff",
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Tech Stack Section */}
            <div className="space-y-4 text-center">
              <h2 className="font-bold text-lg">Currently working on</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    icon: <SiMongodb />,
                    color: "hover:text-green-600",
                  },
                  {
                    icon: <SiExpress />,
                    color: "hover:text-red-400",
                  },
                  {
                    icon: <FaReact />,
                    color: "hover:text-[#009df6]",
                  },
                  {
                    icon: <FaNodeJs />,
                    color: "hover:text-[#388e3c]",
                  },
                ].map((IconComponent, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-[44px] font-bold cursor-pointer hover:scale-105 transition ${IconComponent.color}`}
                    style={{
                      background: "#ffffff",
                      boxShadow: "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff",
                    }}
                  >
                    <span className="font-bold text-2xl md:text-3xl">
                      {" "}
                      {IconComponent.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-1/2 order-1 md:order-2 mt-10 md:mt-20 flex justify-center md:justify-end">
          <div
            className="w-60 h-60 md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center"
            style={{
              background: "#ffffff",
              boxShadow: "-5px -5px 10px #9b9b9b, 5px 5px 10px #ffffff",
              borderRadius: "50%",
            }}
          >
            <img
              src="https://img.freepik.com/free-psd/3d-darstellung-der-person-mit-sonnenbrille_23-2149436188.jpg?t=st=1749992104~exp=1749995704~hmac=dc8def19ccd9bc99b0456ee974f23e465aa840df5ea993f4eec06137645d8b8e&w=1380"
              className="rounded-full w-60 h-60 md:w-[400px] md:h-[400px] object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
