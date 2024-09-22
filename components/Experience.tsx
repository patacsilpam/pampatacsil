import React from "react";
import ExperienceCard from "@/components/ui/ExperienceCard";
const Experience = () => {
  return (
    <div className="mt-24 pb-28">
      <h1 className="text-white text-5xl font-bold text-center">
        My <span className="text-purple-400">work experience</span>
      </h1>
      <br />
      <br />
      <ExperienceCard />
    </div>
  );
};

export default Experience;
