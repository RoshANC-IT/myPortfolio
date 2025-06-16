import React from "react";
import techData from "../data/TechData";

export default function Skills() {
  return (
    <section className="py-12">
      <div className="max-w-screen-2xl container mx-auto my-6 px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          {techData.map((category, index) => (
            <div key={index} className="mb-16 w-full">
              <h2 className="text-2xl font-bold text-center mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                {category.items.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-[175px] flex flex-col items-center justify-center transition hover:scale-105 border-2 border-transparent ${tech.hoverStyle}`}
                      style={{
                        width: "150px",
                        height: "150px",
                        background: "#ffffff",
                        boxShadow:
                          "10px 10px 21px #bebebe, -10px -10px 21px #ffffff",
                      }}
                    >
                      <Icon className="text-3xl mb-2" />
                      <span className="text-sm font-medium text-center">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
