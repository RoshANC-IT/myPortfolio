import React from "react";
import projectData from "../data/ProjectData";

function Footer() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Projects</h1>

      {/* Responsive grid: 1 col on small, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              boxShadow: "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff",
              borderRadius: "12px",
              padding: "24px",
              transition: "transform 0.3s ease",
            }}
            className="hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Technology:</strong> {project.technology}
            </p>
            <p className="text-gray-600 mb-3">{project.description}</p>

            <div className="flex flex-col gap-2 text-blue-600 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                🔗 GitHub
              </a>
              <a
                href={project.deploye}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                🌐 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
