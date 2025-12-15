import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";
import Frameworks from "../components/Frameworks"
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Roshan </p>
            <p className="subtext">
              Detail-oriented B.Tech IT student with practical experience
              building scalable full-stack web applications. Skilled in
              JavaScript, Java, and modern frameworks including React.js,
              Node.js, and Django. Proficient in designing RESTful APIs,
              integrating SQL/NoSQL databases, and deploying cloud-based
              solutions. Adept at Agile workflows, version control with Git, and
              responsive UI development. Committed to writing clean,
              maintainable code and delivering high-quality software on
              schedule.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Computer network"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Operating System"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="System Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="MySQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="https://img.icons8.com/color/96/000000/sql.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Currently based in India — available for remote work globally.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
            <p>Strong in Data Structures and Algorithms</p>

            <ul className="flex space-x-4 mt-4">
              {/* LeetCode */}
              <li>
                <a
                  href="https://leetcode.com/u/roshan8B_O_T/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"
                    alt="LeetCode"
                    className="w-10 h-10"
                  />
                </a>
              </li>

              {/* Naukri Code360 */}
              <li>
                <a
                  href="https://www.naukri.com/code360/profile/RoshanTWo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxrTIBuBZizatHdyqsYy9gTb9aW9fHPANgdtp5VXcDfDu_ojK88xUsjbPVPffzXiA.rOhFsYsqvtWttBQUL.yDGk-&format=source"
                    alt="Naukri Code360"
                    className="w-10 h-10"
                  />
                </a>
              </li>

              {/* GeeksforGeeks */}
              <li>
                <a
                  href="https://www.geeksforgeeks.org/profile/roshanrash2m"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://repository-images.githubusercontent.com/594709571/9a22d4cd-9ac8-48c4-9548-29c9f43f65fb"
                    alt="GeeksforGeeks"
                    className="w-10 h-10 rounded-full"
                  />
                </a>
              </li>
            </ul>

            {/* Example random tech image */}
            {/* <img
              src="https://repository-images.githubusercontent.com/594709571/9a22d4cd-9ac8-48c4-9548-29c9f43f65fb"
              alt="Tech Illustration"
              className="mt-4"
            /> */}
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
