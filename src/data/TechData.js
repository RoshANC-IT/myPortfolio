import { FaJava, FaPython, FaBootstrap, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCss, PiFileHtml } from "react-icons/pi";
import {
  SiShadcnui,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import {} from "react-icons/si";
const techData = [
  {
    category: "Programming Languages",
    items: [
      {
        name: "Java",
        icon: FaJava,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
      {
        name: "SQL",
        icon: GrMysql,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
      {
        name: "JavaScript",
        icon: DiJavascript,
        hoverStyle: "hover:text-yellow-400 hover:border-yellow-400",
      },
      {
        name: "Python",
        icon: FaPython,
        hoverStyle: "hover:text-blue-400 hover:border-blue-400",
      },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      {
        name: "HTML",
        icon: PiFileHtml,
        hoverStyle: "hover:text-red-600 hover:border-red-600",
      },
      {
        name: "CSS",
        icon: PiFileCss,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
      {
        name: "React",
        icon: FaReact,
        hoverStyle: "hover:text-[#009df6] hover:border-[#009df6]",
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        hoverStyle: "hover:text-[#9900ef] hover:border-[#9900ef]",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        hoverStyle: "hover:text-[#388e3c] hover:border-[#388e3c]",
      },
      {
        name: "Redux",
        icon: SiRedux,
        hoverStyle: "hover:text-[#9900ef] hover:border-[#9900ef]",
      },
      {
        name: "REST API",
        icon: AiFillApi,
        hoverStyle: "hover:text-[#ffeb3b] hover:border-[#ffeb3b]",
      },
      {
        name: "Postman",
        icon: SiPostman,
        hoverStyle: "hover:text-[#f44336] hover:border-[#f44336]",
      },
      {
        name: "Next js",
        icon: SiNextdotjs,
        hoverStyle: "hover:text-[#00d084] hover:border-[#00d084]",
      },
      {
        name: "MySQL",
        icon: GrMysql,
        hoverStyle: "hover:text-blue-600 hover:border-blue-600",
      },
    ],
  },
];
export default techData;
