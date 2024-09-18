"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Custom404() {
  return (
    <div className="min-h-[calc(100vh_-_75px)]  flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#475440]">404</h1>
        <h2 className="text-4xl font-semibold text-[#475440] mt-4">
          Page Not Found
        </h2>
        <p className="text-lg mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <div className="mt-6 flex gap-2 items-center justify-center px-6 py-3 hover:gap-4 transition-all duration-500 font-semibold rounded ">
            <FaArrowLeft /> Go Back
          </div>
        </Link>
      </div>
    </div>
  );
}
