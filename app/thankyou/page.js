"use client";
import Link from "next/link";
import React from "react";
import logo from "../../public/1946.webp";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div>
      <div className={`sticky bg-white bg-opacity-30 w-full top-0`}>
        <div className="flex justify-between items-center bg-white shadow-lg py-4 px-2 ">
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

      <section className="min-h-[calc(100vh_-_150px)]  flex justify-center items-center dark:text-black ">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <div className="py-4 pb-8">
              <h1 className=" text-black text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
                Thank you for your interest.
              </h1>
              <p className="mb-5 text-lg font-medium text-center text-black ">
                Our sales executive will contact you shortly to provide all the
                necessary details.
              </p>

              <div className="text-sm font-semibold text-center text-black sm:text-base">
                Call us if you have any questions:
                <Link
                  className="mt-2 font-semibold text-center text-sm sm:text-base "
                  href={`tel:+971583094911`}
                >
                  &nbsp; +971583094911
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-blue-600 text-white text-md font-medium leading-5 tracking-[0.21px]"
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

export default ThankYou;
