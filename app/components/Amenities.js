import React from "react";

import Image from "next/image";

const Amenities = () => {
  return (
    <div className=" my-14  " id="amenity">
      <div className="my-section my-14  text-white  relative z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-40 z-[1]"></div>
        <div className="w-full p-4 sm:p-10 z-20 relative">
          <div>
            <div className="text-center py-8">
              <div className="mb-16">
                <h3 className="text-xl  sm:text-3xl md:text-4xl px-2 font-semibold capitalize text-center mx-auto mb-2 ">
                  AMENITIES AND FACILITIES
                </h3>
                <p>Discover Exciting Features at The SunCity</p>
              </div>

              <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 place-items-center">
                <div>
                  <Image
                    src="/Beach-Access.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Beach Access</h3>
                </div>

                <div>
                  <Image
                    src="/Cycling-Trails.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Cycling Trails</h3>
                </div>
                <div>
                  <Image
                    src="/Dining-Outlets.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Dining Outlets</h3>
                </div>
                <div>
                  <Image
                    src="/Fitness-Centre.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Fitness Centre</h3>
                </div>

                <div>
                  <Image
                    src="/Gymnasium.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Gymnasium</h3>
                </div>
                <div>
                  <Image
                    src="/Health-Care-Centre.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Health Care Centre</h3>
                </div>
                <div>
                  <Image
                    src="/Housekeeping.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Housekeeping</h3>
                </div>
                <div>
                  <Image
                    src="/Indoor-Games.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Indoor Games</h3>
                </div>
                <div>
                  <Image
                    src="/Infinity-Pool.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Infinity Pool</h3>
                </div>
                <div>
                  <Image
                    src="/Jogging-Trails.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Jogging Trails</h3>
                </div>
                <div>
                  <Image
                    src="/Kids-Play-Area.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Kids Play Area</h3>
                </div>
                <div>
                  <Image
                    src="/Marina-&-Yacht-Club.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Marina & Yacht Club</h3>
                </div>
                <div>
                  <Image
                    src="/Park.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Parks and Leisure Areas</h3>
                </div>
                <div>
                  <Image
                    src="/Restaurants.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Restaurants</h3>
                </div>
                <div>
                  <Image
                    src="/Supermarket.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Supermarket</h3>
                </div>
                <div>
                  <Image
                    src="/Swimming-Pool.webp"
                    alt="Background Image"
                    height={80}
                    width={80}
                    className="object-contain pb-2 mx-auto invert"
                  />
                  <h3 className="uppercase">Swimming Pool</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
