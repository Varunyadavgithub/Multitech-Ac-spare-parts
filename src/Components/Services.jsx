import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4">AC Installation</h3>
          <p>We provide professional AC installation services for all types of air conditioning systems.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4">AC Repair</h3>
          <p>Our experts are available for quick and reliable AC repair services.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4">AC Maintenance</h3>
          <p>Regular maintenance services to ensure your AC systems are running smoothly.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
