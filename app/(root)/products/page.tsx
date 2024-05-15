'use client'
import React, { useState } from "react";


const ProductPage = () => {
  const images = ["pallete1.webp", "pallete2.webp", "pallete3.jpg", "pallete4.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDecrement = (e) => {
    const quantityElement = e.target.parentNode?.querySelector("#quantity");
    if (quantityElement && parseInt(quantityElement.textContent || "0") > 0) {
      quantityElement.textContent = String(
        parseInt(quantityElement.textContent || "0") - 1
      );
    }
  };

  const handleIncrement = (e) => {
    const quantityElement = e.target.parentNode?.querySelector("#quantity");
    if (quantityElement) {
      quantityElement.textContent = String(
        parseInt(quantityElement.textContent || "0") + 1
      );
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 h-full flex items-center justify-center">
      <div className="bg-black-100 p-4 sm:p-8 rounded-lg mb-4 sm:mb-0 sm:mr-4">
        <div className="w-full sm:w-96 rounded-box overflow-hidden relative">
          <img
            src={images[currentImageIndex]}
            className="w-full h-96 object-cover rounded-lg transition-transform duration-300 transform"
            alt={`Ready To Go Pallets ${currentImageIndex + 1}`}
          />
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
            onClick={handlePrevImage}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
            onClick={handleNextImage}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold mb-2">Ready-To-Go Pallets</h2>
        <div className="text-lg font-italic text-gray-500 mb-4">
          1,600 EGP
        </div>
        <div className="mb-4 max-w-lg mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="flex items-center justify-center sm:justify-start mb-4">
          <button className="btn btn-quantity bg-blue-500 text-white rounded-full py-2 px-4" onClick={handleDecrement}>
            -
          </button>
          <span id="quantity" className="mx-2 text-lg font-semibold">
            1
          </span>
          <button className="btn btn-quantity bg-blue-500 text-white rounded-full py-2 px-4" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <button className="btn btn-primary bg-blue-500 text-white rounded-full py-2 px-4 mr-4">Buy Now</button>
          <p className="btn btn-primary gray-white rounded-full py-2 px-4 mr-4">Or</p>
          <button className="btn btn-primary bg-blue-500 text-white rounded-full py-2 px-4">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
