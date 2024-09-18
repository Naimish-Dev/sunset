// Example code for a responsive table in Next.js with Tailwind CSS

import Image from "next/image";
import fourBed from "../../../public/4.webp";
import fiveBed from "../../../public/5.webp";
import { Fragment } from "react";
const FloorPlanTable = () => {
  return (
    <Fragment>
      <h2 className="text-center font-bold text-2xl my-4">Floor Plan</h2>
      <div className="max-w-screen-2xl mx-auto  overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-gray-200 ">
            <tr>
              <th className="py-2 border border-gray-300">Floor Plan</th>
              <th className="py-2 border border-gray-300 hidden md:table-cell">
                Category
              </th>
              <th className="py-2 border border-gray-300 hidden sm:table-cell">
                Floor Details
              </th>
              <th className="py-2 border border-gray-300">Sizes</th>
              <th className="py-2 border border-gray-300 hidden sm:table-cell">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border border-gray-300 flex items-center space-x-2">
                <Image
                  height={50}
                  width={50}
                  src={fourBed}
                  alt="Bedroom"
                  className="h-6 w-6"
                />
                <span>4 Bedroom</span>
              </td>
              <td className="py-2 border border-gray-300 hidden md:table-cell">
                4 Bedroom
              </td>
              <td className="py-2 border border-gray-300 hidden sm:table-cell">
                MIDDLE UNIT (THSC-M)
              </td>
              <td className="py-2 border border-gray-300">
                2319.19 Sq Ft to 2319.19 Sq Ft
              </td>
              <td className="py-2 border border-gray-300 hidden sm:table-cell">
                Townhouse
              </td>
            </tr>
            <tr>
              <td className="py-2 border border-gray-300 flex items-center space-x-2">
                <Image
                  height={50}
                  width={50}
                  src={fiveBed}
                  alt="Bedroom"
                  className="h-6 w-6"
                />
                <span>5 Bedroom</span>
              </td>
              <td className="py-2 border border-gray-300 hidden md:table-cell">
                5 Bedroom + Maid
              </td>
              <td className="py-2 border border-gray-300 hidden sm:table-cell">
                END UNIT (THSC-E)
              </td>
              <td className="py-2 border border-gray-300">
                3323.90 Sq Ft to 3323.90 Sq Ft
              </td>
              <td className="py-2 border border-gray-300 hidden sm:table-cell">
                Townhouse
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default FloorPlanTable;
