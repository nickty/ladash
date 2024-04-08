import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 flex flex-col">
      <div className="text-white text-lg p-4 border-b border-gray-700">
        Dashboard
      </div>
      <ul className="flex-1 overflow-y-auto">
        <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
          Booking
        </li>
        <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
          Products
        </li>
        <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
          Suppliers
        </li>
        <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
          Analytics
        </li>
        <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
          Integration
        </li>
      </ul>
      <div className="p-4 text-white border-t border-gray-700 cursor-pointer">
        User Menu
      </div>
    </div>
  );
};

export default Sidebar;
