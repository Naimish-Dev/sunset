// Example code for a responsive payment plan in Next.js with Tailwind CSS

import Image from "next/image";
import construction from "../../../public/during-construction.webp";
import downpayment from "../../../public/down-payment.webp";
import handover from "../../../public/handover.webp";
const PaymentPlan = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <h2 className="text-center font-bold text-2xl my-4">Payment Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Down Payment */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            height={100}
            width={100}
            src={downpayment}
            alt="Down Payment"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-4xl font-bold text-gray-800 mb-2">20%</h3>
          <p className="font-semibold text-gray-600">Down Payment</p>
          <p className="text-gray-500">On Booking Date</p>
        </div>

        {/* During Construction */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            height={100}
            width={100}
            src={construction}
            alt="Down Payment"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-4xl font-bold text-gray-800 mb-2">55%</h3>
          <p className="font-semibold text-gray-600">During Construction</p>
          <p className="text-gray-500">1st to 35th Installment</p>
        </div>

        {/* On Handover */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <Image
            height={100}
            width={100}
            src={handover}
            alt="Down Payment"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-4xl font-bold text-gray-800 mb-2">25%</h3>
          <p className="font-semibold text-gray-600">On Handover</p>
          <p className="text-gray-500">100% Completion</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
