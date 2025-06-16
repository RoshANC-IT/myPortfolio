import React from "react";
import educationData from "../data/Education";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-10 text-center">Education</h1>

      {/* Responsive grid: 1 column on small, 2 on medium, 3 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              boxShadow: "9px 9px 18px #b1b1b1, -9px -9px 18px #ffffff",
              borderRadius: "12px",
              padding: "24px",
              transition: "transform 0.9s ease",
            }}
            className="hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-3">{item.name}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Class:</strong> {item.class}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Stream:</strong> {item.stream}
            </p>
            <p className="text-gray-700">
              <strong>Pass Out:</strong> {item.passOut}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
