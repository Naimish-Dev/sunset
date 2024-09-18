"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import WaveText from "../utils/WaveText";
import heroImg from "../../public/assets/images/20.png";
import logo from "../../public/1946.webp";

export const Hero = ({ setIsModel }) => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    if (isSidebarActive) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isSidebarActive]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  const handleDownload = () => {
    //     const pdfUrl = "/assets/Brocher/One Billion Tower Brochure.pdf";
    //
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "The-Gateway-Sewri-EBrochure.pdf";
    //     link.target = "_blank";
    //
    //     document.body.appendChild(link);
    //     link.click();
    //
    //     document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-[999999999]  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className=" flex justify-between text-3xl  p-2 py-4 border-b-2 border-black">
              <Link href={"/"} className="text-center">
                <Image height={100} width={100} src={logo} alt={logo} />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer text-black"
                />
              </div>
            </div>

            <ul className=" text-center h-full w-full flex flex-col gap-4 pt-12 px-10 items-center">
              <Link
                className="w-full sm:w-[50%] transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-2 px-6 rounded-md"
                href={"../#about"}
              >
                About
              </Link>
              <Link
                className="w-full sm:w-[50%] transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-2 px-6 rounded-md"
                href={"../#gallery"}
              >
                Gallery
              </Link>
              <Link
                className="w-full sm:w-[50%] transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-2 px-6 rounded-md"
                href={"../#amenity"}
              >
                Amenity
              </Link>

              <Link
                href="../#location"
                className="w-full sm:w-[50%] transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-2 px-6 rounded-md"
              >
                Location
              </Link>
              <li
                onClick={() => {
                  setIsModel(true), setIsSidebarActive(false);
                }}
                className="cursor-pointer w-full sm:w-[50%] transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-2 px-6 rounded-md"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-50 top-0 left-0 w-screen text-white  py-4 px-2 bg-white`}
      >
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <Image height={100} width={100} src={logo} alt="logo" />
          </Link>
          <div className=" gap-3 font-medium hidden sm:flex mr-4 text-black ">
            <Link
              className="transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-[5px] px-4 rounded-md"
              href={"../#about"}
            >
              About
            </Link>
            <Link
              className="transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-[5px] px-4 rounded-md"
              href={"../#gallery"}
            >
              Gallery
            </Link>
            <Link
              className="transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-[5px] px-4 rounded-md"
              href={"../#amenity"}
            >
              Amenity
            </Link>

            <Link
              className="transition-all duration-300 hover:bg-black font-medium text-lg hover:text-white p-[5px] px-4 rounded-md"
              href={"../#location"}
            >
              Location
            </Link>
            <span
              onClick={() => setIsModel(true)}
              className="transition-all cursor-pointer duration-300 hover:bg-black font-medium text-lg hover:text-white p-[5px] px-4 rounded-md"
            >
              Contact Us
            </span>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden cursor-pointer"
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList className="text-black" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={heroImg}
          className="w-screen h-screen object-cover"
          alt="img"
          height={1000}
          width={1000}
        />

        <div className="absolute top-0 left-0 w-full h-full z-20  flex justify-center items-center gap-4 bg-black/40">
          <div className="text-center text-white  mt-32 slg:mt-36 ">
            <div className="mx-2">
              <h1 className="text-[#E9E1D6] text-2xl  sm:text-4xl m-[2px] sm:m-1 font-semibold uppercase">
                Damac Sun City at Dubailand by <br /> Damac Properties
              </h1>
              <h2 className="mt-8 ">
                <WaveText
                  styles={
                    "text-[#E9E1D6]  text-sm sm:text-lg m-[2px] sm:m-1 uppercase"
                  }
                  text="CONNECTING OWILDLIFE & NATURE"
                />
              </h2>
              <div>
                <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
                  <button
                    onClick={() => {
                      const token = sessionStorage.getItem("sunCity_Token");
                      if (token) {
                        handleDownload();
                      } else {
                        setIsModel(true);
                      }
                    }}
                    className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
                  >
                    Download Broucher
                  </button>
                  <button
                    onClick={() => setIsModel(true)}
                    className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
                  >
                    Show your Interest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
