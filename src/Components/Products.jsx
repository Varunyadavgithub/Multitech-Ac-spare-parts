import React, { useState } from "react";
import Modal from "./Modal";
import { productItems } from "../assets/assets";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productItems.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="mb-4 w-full h-48 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500 mt-2">{product.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              onClick={() => handleViewDetails(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
