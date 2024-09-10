import React from "react";
import { Link } from "react-router-dom";
import Products from "../Components/Products";
import CarouselComponent from "../Components/CarouselComponent";

function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <CarouselComponent />
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
              <button className="bg-orange-600 text-white px-6 py-3 rounded-md text-lg">
                View Products
              </button>
            </Link>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-4">AC Installation</h3>
                <p>
                  We provide professional AC installation services for all types
                  of air conditioning systems.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-4">AC Repair</h3>
                <p>
                  Our experts are available for quick and reliable AC repair
                  services.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-4">AC Maintenance</h3>
                <p>
                  Regular maintenance services to ensure your AC systems are
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About the Company</h2>
            <p className="text-lg">
              MultiTech AC Spare Parts has been serving customers with
              top-quality AC spare parts for over a decade. Our mission is to
              provide affordable and reliable products to keep your air
              conditioning systems running efficiently. With a wide range of
              products, expert support, and fast delivery, we ensure customer
              satisfaction.
            </p>
          </div>{" "}
        </section>

        <section className="py-10">
          <Products />
        </section>

        <section className="bg-gray-100 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Services We Offer</h2>
            <p className="text-lg">
              We provide a wide range of services to ensure your AC systems are
              always performing at their best:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>AC Installation & Replacement</li>
              <li>Emergency AC Repairs</li>
              <li>Preventive AC Maintenance</li>
              <li>Indoor Air Quality Solutions</li>
            </ul>
          </div>{" "}
        </section>

        <section className="py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-lg">
              At MultiTech AC Spare Parts, we are committed to delivering
              high-quality spare parts and exceptional customer service. We have
              a dedicated team of professionals who work tirelessly to meet your
              needs. Whether you need spare parts for residential or commercial
              air conditioning systems, we've got you covered. Our goal is to
              provide products and services that ensure the optimal performance
              of your AC systems.
            </p>
          </div>{" "}
        </section>
      </div>
    </>
  );
}

export default HomePage;
