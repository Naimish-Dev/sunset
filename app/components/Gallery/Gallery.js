import React from "react";
import GalleryImgPreview from "../GalleryImgPreview/GalleryImgPreview";

const Gallery = () => {
  return (
    <div
      className="flex justify-center items-center my-16 py-10 md:py-16 bg-gray-100"
      id="gallery"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h3 className="text-[#485541] text-xl  sm:text-3xl md:text-4xl px-2 font-semibold capitalize text-center mx-auto mb-3 ">
          Offering The Most Refined <br />
          Living Spaces
        </h3>
        <p className="mb-4 w-full sm:w-[50%] lg:w-[40%] ">
          The townhouses design incorporates modern aesthetic and natural
          materials, with expansive glass façades that blur the lines between
          indoor and outdoor environment.
        </p>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          <GalleryImgPreview />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
