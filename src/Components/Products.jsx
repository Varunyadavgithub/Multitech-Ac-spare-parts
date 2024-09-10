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
    { name: "AC Compressor", img: spare_part_01 },
    { name: "AC Condenser", img: spare_part_02 },
    { name: "AC Fan", img: spare_part_03 },
    { name: "AC Filter", img: spare_part_04 },
    { name: "AC Compressor", img: spare_part_05 },
    { name: "AC Condenser", img: spare_part_06 },
    { name: "AC Fan", img: spare_part_07 },
    { name: "AC Filter", img: spare_part_08 },
    { name: "AC Compressor", img: spare_part_09 },
    { name: "AC Condenser", img: spare_part_10 },
    { name: "AC Fan", img: spare_part_11 },
    { name: "AC Filter", img: spare_part_12 },
    { name: "AC Compressor", img: spare_part_13 },
    { name: "AC Condenser", img: spare_part_14 },
  ];

  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {productItems.map((product, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <img src={product.img} alt={product.name} className="mb-4 h-48 w-full" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
