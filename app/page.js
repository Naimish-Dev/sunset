"use client";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import CustomModal from "./components/CustomModal";
import Slider from "./components/Slider";
import FloorPlanTable from "./components/FlooerPlan/FlooerPlan";
import PaymentPlan from "./components/Payment/Payment";

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px"
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const [isModel, setIsModel] = useState(false);

  const CloseModelHandler = () => {
    setIsModel(false);
  };
  useEffect(() => {
    const checkTokenAndOpenModal = () => {
      const token = sessionStorage.getItem("sunCity_Token");
      if (!token) {
        setIsModel(true);
      }
    };
    checkTokenAndOpenModal();

    const intervalId = setInterval(checkTokenAndOpenModal, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <main>
      <div className="cursor"></div>
      <Hero setIsModel={setIsModel} />
      <About />
      <Slider />
      <PaymentPlan />
      <Gallery />
      <FloorPlanTable />
      <Amenities />
      <Location />

      {isModel && (
        <CustomModal CloseModelHandler={CloseModelHandler}></CustomModal>
      )}
    </main>
  );
}
