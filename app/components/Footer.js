import Image from "next/image";
import React from "react";
import logo from "../../public/1946.webp";
export const Footer = () => {
  return (
    <div className="w-full px-2 py-4 flex justify-center items-center h-auto bg-gray-300">
      <Image
        src={logo}
        height={100}
        width={100}
        className="w-28"
        alt="logo-img"
      />
    </div>
  );
};
