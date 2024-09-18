import React from "react";

const About = () => {
  return (
    <div className="my-16" id="about">
      <div className="max-w-screen-2xl 2xl:mx-auto md:mx-12 mx-4   px-2  ">
        <div className="flex flex-wrap  gap-4  justify-center">
          <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  ">
            <h3 className="text-[#485541] text-xl  sm:text-3xl md:text-4xl px-2 font-semibold capitalize text-center mx-auto w-full sm:w-[70%]">
              "Luxury Living Amidst Nature at Damac Sun City"
            </h3>
          </div>
          <div className="flex flex-col text-base w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(45%_-_17px)] pr- gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap">
            <p className="break-all">
              Damac Sun City at Dubailand is a luxury residential community by
              Damac Properties, offering 4 and 5-bedroom townhouses that blend
              modern design with nature-inspired aesthetics. Located in the
              Dubailand District, the development provides easy access to major
              highways and key city destinations, including Al Maktoum
              International Airport, business hubs, shopping, and leisure
              venues.
            </p>
            <p className="break-all">
              The community emphasizes wellness, featuring outdoor activities
              like hiking, yoga, and wellness-focused amenities such as ice
              baths, monkey trails, and forest walks. Designed to nurture
              residents' well-being, it offers green spaces, walking paths, and
              water features that enhance the serene, nature-infused
              environment.
            </p>
            <p className="break-all">
              Residents can enjoy unique spaces like a wild garden amphitheater
              for artistic expression, co-working spaces amidst nature, and a
              grand water feature that serves as a visual and emotional
              centerpiece. These spaces encourage personal growth, creativity,
              and interaction. The development fosters a balanced, active
              lifestyle through its wellness retreats, sunrise gym, and various
              outdoor activities, offering a harmonious blend of luxury living
              and natural beauty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
