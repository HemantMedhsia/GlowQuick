import React, { useState, useEffect } from "react";
import Profile from "../assets/Images/profile.jpg";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Dummy Data for Team Members
    const dummyData = [
      {
        name: "John Doe",
        role: "Founder & CEO",
        level: "top",
        image: Profile,
      },
      {
        name: "Jane Smith",
        role: "CTO",
        level: "second",
        image: Profile,
      },
      {
        name: "Robert Brown",
        role: "Marketing Head",
        level: "second",
        image: Profile,
      },
      {
        name: "Emily Clark",
        role: "Product Manager",
        level: "third",
        image: Profile,
      },
      {
        name: "Michael Lee",
        role: "Software Engineer",
        level: "third",
        image: Profile,
      },
      {
        name: "Sarah Taylor",
        role: "UI/UX Designer",
        level: "third",
        image: Profile,
      },
    ];

    // Simulating API call
    setTimeout(() => setTeamMembers(dummyData), 1000);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-[#cfe5ed] via-white to-[#cfe5ed]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#285F74] mb-8">
          Meet Our Team
        </h2>
      </div>
      <div className="container mx-auto">
        {teamMembers.length === 0 ? (
          <p className="text-center text-gray-500">Loading team members...</p>
        ) : (
          <div className="flex flex-col items-center">
            {/* Top-Level Member */}
            {teamMembers
              .filter((member) => member.level === "top")
              .map((member, index) => (
                <div key={index} className="text-center mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-full shadow-lg"
                  />
                  <h3 className="text-xl text-[#285F74] font-semibold mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}

            {/* Connecting Line */}
            <div className="border-l-4 border-red-500 h-16"></div>

            {/* Second Level */}
            <div className="flex justify-center space-x-16 mb-8">
              {teamMembers
                .filter((member) => member.level === "second")
                .map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full shadow-lg"
                    />
                    <h3 className="text-lg text-[#285F74] font-semibold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-center space-x-16">
              <div className="border-t-4 border-red-500 w-32"></div>
              <div className="border-t-4 border-red-500 w-32"></div>
            </div>
            <div className="flex justify-center space-x-8 mt-4">
              <div className="border-l-4 border-red-500 h-12"></div>
              <div className="border-l-4 border-red-500 h-12"></div>
            </div>

            {/* Third Level */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              {teamMembers
                .filter((member) => member.level === "third")
                .map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 mx-auto rounded-full shadow-lg"
                    />
                    <h3 className="text-lg text-[#285F74] font-semibold mt-4">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;
