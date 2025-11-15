import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ collapsed, toggleCollapsed }) => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Bookings", path: "/admin" },
    { name: "Booking Form", path: "/booking" },
    { name: "Admin Login", path: "/admin-login" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white/10 backdrop-blur-lg 
        border-r border-white/20 shadow-2xl transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        {!collapsed && <h1 className="text-white font-bold text-lg">Show View</h1>}
        <button onClick={toggleCollapsed} className="text-white text-xl">
          <FaBars />
        </button>
      </div>
      <nav className="mt-6 flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-white px-4 py-2 rounded-lg hover:bg-white/20 transition ${
              collapsed ? "text-center px-0" : ""
            }`}
          >
            {collapsed ? item.name[0] : item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
