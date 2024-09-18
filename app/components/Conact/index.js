"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Conact = () => {
  return (
    <div className="fixed z-20 flex flex-col gap-4 bottom-10 right-10">
      <Link href={`tel:+971 506945852`}>
        <Image
          src={"/assets/contact-icon/call.svg"}
          width={40}
          height={40}
          className="mx-auto"
          alt="img"
        />
      </Link>
      <div className="cursor-pointer">
        <Link href={`https://api.whatsapp.com/send?phone=971506945852`}>
          <Image
            src={"/assets/contact-icon/whatsapp.png"}
            width={40}
            height={40}
            className="mx-auto"
            alt="img"
          />
        </Link>
      </div>
    </div>
  );
};

export default Conact;
