import React, { useState } from "react";
import galleryItems from "../Data/galleryItems";

const categories = [
  "All",
  "Haircuts",
  "Shaving",
  "Hair Coloring",
  "Facial",
  "Styling",
  "Beard Trim",
];

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter the gallery items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-10 px-5">
      {/* Heading */}
      <h2 className="text-5xl text-[#285F74] font-bold text-center mb-6">
        Our Services Gallery
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 text-sm rounded-sm ${
              selectedCategory === category
                ? "border-b-2 border-[#285F74] text-[#285F74] font-semibold"
                : "bg-none text-gray-800 border-gray-300 font-bold"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-20">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-lg relative max-h-[90vh] overflow-y-auto p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <img
              src={selectedItem.image}
              alt={selectedItem.category}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Title and Description */}
            <h3 className="text-3xl text-[#285F74] font-bold mt-4">
              {selectedItem.category}
            </h3>
            <p className="text-gray-600 text-lg mt-2">
              {selectedItem.description}
            </p>

            <div className="bg-zinc-50 mt-6 p-4 rounded-lg shadow">
              <h4 className="text-2xl font-semibold text-[#285F74]">
                Service Duration
              </h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-3xl font-thin text-green-600">
                  30 minutes
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-zinc-50 mt-6 p-4 rounded-lg shadow">
              <h4 className="text-2xl font-semibold text-[#285F74]">Pricing</h4>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-medium text-gray-700">
                  Basic Plan
                </span>
                <span className="text-xl font-bold text-green-600">
                  $19/month
                </span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-medium text-gray-700">
                  Premium Plan
                </span>
                <span className="text-xl font-bold text-green-600">
                  $49/month
                </span>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow">
              <h4 className="text-2xl font-semibold text-[#285F74]">
                More Related Images
              </h4>
            </div>

            <section className="bg-zinc-50">
              <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-6 space-y-24 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row mx-auto">
                  {/* Component Images */}
                  <a href="#_">
                    <img
                      src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&auto=format&fit=crop"
                      className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                      alt="#_"
                    />
                  </a>
                  <a href="#_">
                    <img
                      src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&auto=format&fit=crop"
                      className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                      alt="#_"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* Call-to-Action Button */}
            <div className="flex justify-center mt-6">
              <button
                className="bg-[#285F74] text-white text-lg font-medium px-6 py-3 rounded-lg shadow hover:bg-[#1e4b59]"
                onClick={() => alert("Purchase Successful!")}
              >
                Book Appointment Now
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedItem(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
