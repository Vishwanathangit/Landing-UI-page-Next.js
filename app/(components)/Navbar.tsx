import React from "react";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white">
   
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-[#5046E4] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">Nextly</span>
      </div>
      
     
      <div className="flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-[#5046E4] transition-colors">Product</a>
        <a href="#" className="text-gray-700 hover:text-[#5046E4] transition-colors">Features</a>
        <a href="#" className="text-gray-700 hover:text-[#5046E4] transition-colors">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-[#5046E4] transition-colors">Company</a>
        <a href="#" className="text-gray-700 hover:text-[#5046E4] transition-colors">Blog</a>
      </div>
      
 
      <div className="flex items-center space-x-4">
        <button className="bg-[#5046E4] text-white px-6 py-2 rounded-lg hover:bg-[#4338CA] transition-colors">
          Get Started
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Sun size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;