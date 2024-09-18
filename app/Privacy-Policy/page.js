"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/1946.webp";

const index = () => {
  return (
    <div>
      <div className={`sticky bg-white py-4 px-2 bg-opacity-30 w-full top-0`}>
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <Image
              src={logo}
              height={100}
              width={100}
              className="w-28"
              alt="logo-img"
            />
          </Link>
        </div>
      </div>

      <section className="min-h-[calc(100vh_-_150px)]  flex justify-center items-center">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <h3 className="mb-5 text-4xl text-center font-extrabold">
              {" "}
              Privacy Policy
            </h3>
            <div className="font-bold text-lg">
              Disclaimer: This is not the official website. This website is
              managed by an Registered authorised marketing partner. The content
              is for information purposes only and does not constitute an offer
              to avail of any service. Prices mentioned are subject to change
              without notice and properties mentioned are subject to
              availability. Images for representation purpose only. Website Only
              use for an Advertisement Purpose.
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-blue-800 text-white text-md font-medium leading-5 tracking-[0.21px]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
