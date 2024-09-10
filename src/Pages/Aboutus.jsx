import React from "react";
import Founder from "../assets/images/Founder_&_CEO.jpg";
import Head_of_Sales from "../assets/images/Head_of_Sales.jpg";
import Customer_Support_Lead from "../assets/images/Customer_Support_Lead.jpg";

const Aboutus = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to Multi Tech AC Spare Parts, a trusted provider of
          high-quality AC spare parts. With years of experience in the industry,
          we are committed to delivering the best products and services to our
          customers across the Vadodara.
        </p>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission is to provide reliable and top-notch AC spare parts that
          meet the needs of our customers and help keep their cooling systems
          running smoothly and efficiently.
        </p>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our vision is to be the leading supplier of AC spare parts across
          India, known for exceptional quality, customer service, and
          affordability.
        </p>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <img
              src={Founder}
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <img
              src={Head_of_Sales}
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Head of Sales</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <img
              src={Customer_Support_Lead}
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Michael Johnson</h3>
            <p className="text-gray-600">Customer Support Lead</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <p className="text-lg italic">
              "Multi Tech AC Spare Parts provides exceptional quality products
              that keep our business running smoothly."
            </p>
            <p className="text-gray-600 mt-4">- Rahul Sharma</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <p className="text-lg italic">
              "The customer service is outstanding. They are always helpful and
              responsive to our needs."
            </p>
            <p className="text-gray-600 mt-4">- Priya Singh</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <p className="text-lg italic">
              "Reliable, affordable, and top-notch quality. I highly recommend
              Multi Tech."
            </p>
            <p className="text-gray-600 mt-4">- Ankit Verma</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <p className="text-lg italic">
              "Reliable, affordable, and top-notch quality. I highly recommend
              Multi Tech."
            </p>
            <p className="text-gray-600 mt-4">- Ankit Verma</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md hover:scale-105">
            <p className="text-lg italic">
              "Reliable, affordable, and top-notch quality. I highly recommend
              Multi Tech."
            </p>
            <p className="text-gray-600 mt-4">- Ankit Verma</p>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
        <p className="text-lg mb-8">
          Whether you have questions or need assistance, we're here to help.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Aboutus;
