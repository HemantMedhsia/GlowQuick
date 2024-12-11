import React, { useState } from "react";
import { motion } from "framer-motion";
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
            className={`px-4 py-2 mx-2 text-sm  rounded-sm ${
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
          <motion.div
            key={item.id}
            className="relative cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full bject-cover rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">
                {item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white rounded-lg overflow-hidden w-11/12 max-w-lg p-5 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.category}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{selectedItem.category}</h3>
            <p className="text-gray-600 mt-2">{selectedItem.description}</p>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedItem(null)}
            >
              ✖
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default OurServices;
