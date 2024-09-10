import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <section className="bg-gray-100 text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-black mb-4">
              Welcome to MultiTech AC Spare Parts
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Your one-stop solution for all AC spare parts. We provide quality
              and reliable AC parts across Vadodara.
            </p>
            <Link to="/products">
              <button className="bg-black text-white px-6 py-3 rounded-md text-lg">
                View Products
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
