import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-3 md:p-6 m-2 rounded-lg shadow-lg max-w-3xl w-full flex">
        <button
          className="absolute top-0 right-0 bg-gray-100 hover:bg-gray-200 rounded-full h-14 w-14 text-gray-600 hover:text-gray-900 text-4xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 pb-4 md:pr-4  overflow-y-auto max-h-[400px] scrollbar-hide">
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <p className="text-gray-500">
              {product.desc}
            </p>
          </div>
          <div className="flex-1">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
