import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          We would love to hear from you! Please reach out to us through any of the methods below:
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
            <p className="text-lg">Office No.4 Jainab Park Tower C B/h, Amrapali Society, Gorwa, Vadodara, Gujarat</p>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
            <p className="text-lg">+91 748 605 2477</p>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-envelope text-blue-500 text-2xl"></i>
            <p className="text-lg">infotech@multitechacspareparts.com</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-md">
        <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
        <form
          action="#"
          method="post"
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <div className="w-full h-60">
          <iframe
            title="Company Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.70486656036!2d-0.1276479877680396!3d51.507350396194354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1e000018af%3A0x9b5e8b244e0739b!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1636441598437!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
