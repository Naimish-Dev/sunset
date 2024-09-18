import React, { useRef, useEffect, useState } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Gallery1ImgPreview(props) {
  const containerRef = useRef(null);

  const [Gallery1, setGallery1] = useState([
    {
      img: "/assets/images/7.png",
    },
    {
      img: "/assets/images/8.png",
    },
    {
      img: "/assets/images/9.png",
    },
    {
      img: "/assets/images/10.png",
    },
    {
      img: "/assets/images/11.png",
    },
    {
      img: "/assets/images/12.png",
    },
    {
      img: "/assets/images/13.png",
    },
    {
      img: "/assets/images/14.png",
    },
    {
      img: "/assets/images/15.png",
    },
    {
      img: "/assets/images/16.png",
    },
    {
      img: "/assets/images/17.png",
    },
    {
      img: "/assets/images/18.png",
    },
  ]);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return (
    <div
      className="img-grid grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-3 m-0 p-0 w-full "
      ref={containerRef}
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      {Gallery1?.map((img, index) => {
        return (
          <div data-fancybox="Gallery1" href={img.img} key={index}>
            <div className="relative transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src={img.img}
                alt="sq-sample"
                className="object-cover md:w-[300px] mx-auto h-auto  aspect-square "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery1ImgPreview;
