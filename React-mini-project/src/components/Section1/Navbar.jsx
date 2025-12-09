import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-[1vw] px-[2vw]">
      <h4 className="bg-black rounded-full text-white px-8 py-3 uppercase">Target Audiance</h4>
      <div className="alinks px-[1vw] flex items-center gap-6">
        <a href="#" className="bg-gray-200 rounded-full px-4 py-2 text-sm">Digital</a>
        <a href="#" className="bg-gray-200 rounded-full px-4 py-2 text-sm">Banking</a>
        <a href="#" className="bg-gray-200 rounded-full px-4 py-2 text-sm">Platform</a>
      </div>
    </div>
  );
};

export default Navbar;
