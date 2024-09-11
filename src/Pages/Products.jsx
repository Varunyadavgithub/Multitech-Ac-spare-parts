import React from "react";
import Products from "../Components/Products";

const ProductPage = () => {
  return (
    <div className=" mx-auto">
      <section className="hero bg-gray-100 py-16 px-2 text-center w-full">
        <h1 className="text-4xl font-bold mb-4">Explore Our AC Spare Parts</h1>
        <p className="text-lg text-gray-700">
          High-quality parts to keep your AC running smoothly.
        </p>
      </section>

      <section className="products py-12">
        <Products />
      </section>

      <section className="about bg-gray-50 py-12 px-2 text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We are a trusted provider of AC spare parts, delivering high-quality
          products and ensuring your air conditioning systems function
          efficiently. Our extensive product range caters to all types of AC
          systems.
        </p>
      </section>
    </div>
  );
};

export default ProductPage;
