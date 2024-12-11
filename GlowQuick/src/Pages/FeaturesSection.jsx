import React from "react";

const aiFeatures = [
  {
    id: 1,
    title: "Task Automation",
    description:
      "Automate repetitive tasks with NeuroGraph's intuitive and intelligent task manager.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
  {
    id: 2,
    title: "Data Analysis",
    description:
      "Gain actionable insights from your data with NeuroGraph's AI-powered analysis.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
  {
    id: 3,
    title: "Personalized Recommendations",
    description:
      "Receive tailored suggestions to improve productivity and efficiency in real time.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
  {
    id: 4,
    title: "Seamless Integrations",
    description:
      "Connect NeuroGraph with your favorite tools for a unified workflow.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
  {
    id: 5,
    title: "Advanced Reporting",
    description:
      "Generate detailed reports to track performance and identify trends.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
  {
    id: 6,
    title: "NeuroGraph API",
    description:
      "Access robust APIs to embed NeuroGraph’s capabilities into your own applications.",
    icon: "https://www.svgrepo.com/show/530666/gene-sequence.svg",
  },
];

const FeatureCard = ({ title, description, icon, isImage }) => (
  <div className="relative w-full mb-8 flex flex-col rounded-2xl border p-8 shadow-lg bg-white lg:mb-4">
    <div
      className={`absolute -top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#285F74] shadow-md`}
    >
      {isImage ? <img src={icon} alt={title} className="h-12" /> : icon}
    </div>
    <h3 className="mb-4 text-2xl font-semibold text-[#285F74] dark:text-white">
      {title}
    </h3>
    <p className="text-gray-700 text-lg">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#cfe5ed] via-white to-[#cfe5ed]">
      <div className=" mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Why Choose <span className="text-[#285F74]">GlowQuick?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Unlock the ultimate convenience with our exceptional features
            designed just for you.
          </p>
        </div>

        <div className=" w-full px-5 py-16 md:px-10 md:py-16">


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
            {aiFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isImage={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
