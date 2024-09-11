import React from "react";
import spare_part_01 from "../assets/images/spare-part-01.jpg";
import spare_part_02 from "../assets/images/spare-part-02.jpg";
import spare_part_03 from "../assets/images/spare-part-03.jpg";
import spare_part_04 from "../assets/images/spare-part-04.jpg";
import spare_part_05 from "../assets/images/spare-part-05.jpg";
import spare_part_06 from "../assets/images/spare-part-06.jpg";
import spare_part_07 from "../assets/images/spare-part-07.jpg";
import spare_part_08 from "../assets/images/spare-part-08.jpg";
import spare_part_09 from "../assets/images/spare-part-09.jpg";
import spare_part_10 from "../assets/images/spare-part-10.jpg";
import spare_part_11 from "../assets/images/spare-part-11.jpg";
import spare_part_12 from "../assets/images/spare-part-12.jpg";
import spare_part_13 from "../assets/images/spare-part-13.jpg";
import spare_part_14 from "../assets/images/spare-part-14.jpg";

const Products = () => {
  const productItems = [
    { name: "AC Compressor", img: spare_part_01, price: "2000 - Rs" },
    { name: "AC Condenser", img: spare_part_02, price: "1500 - Rs" },
    { name: "AC Fan", img: spare_part_03, price: "2100 - Rs" },
    { name: "AC Filter", img: spare_part_04, price: "200 - Rs" },
    { name: "AC Compressor", img: spare_part_05, price: "1200 - Rs" },
    { name: "AC Condenser", img: spare_part_06, price: "3000 - Rs" },
    { name: "AC Fan", img: spare_part_07, price: "1000 - Rs" },
    { name: "AC Filter", img: spare_part_08, price: "11000 - Rs" },
    { name: "AC Compressor", img: spare_part_09, price: "800 - Rs" },
    { name: "AC Condenser", img: spare_part_10, price: "1900 - Rs" },
    { name: "AC Fan", img: spare_part_11, price: "2200 - Rs" },
    { name: "AC Filter", img: spare_part_12, price: "3700 - Rs" },
    { name: "AC Compressor", img: spare_part_13, price: "3200 - Rs" },
    { name: "AC Condenser", img: spare_part_14, price: "1000 - Rs" },
  ];

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
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Products;
