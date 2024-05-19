import Image from "next/image";
import React from "react";
import { SvgIcon } from "../svg";

type CardProps = {
  scr: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  name_order: string;
  price: string;
  change_btn: string;
  proceed_btn: string;
  cancel_btn: string;
};

const Card = ({
  scr,
  alt,
  height,
  width,
  description,
  title,
  cancel_btn,
  change_btn,
  name_order,
  price,
  proceed_btn,
}: CardProps) => {
  return (
    <div className="max-w-[450px] mx-auto px-5">
      <div className="bg-white rounded-xl">
        <Image
          src={scr}
          alt={alt}
          width={width}
          height={height}
          className="object-contain shadow-card rounded-t-xl mb-6"
        />
        <section>
          <h1 className="flex flex-col items-center py-4 text-2xl font-extrabold">
            {title}
          </h1>
          <p className="flex flex-col justify-center text-neutral-desaturatedBlue text-center text-base px-9 md:px-16">
            {description}
          </p>
          <div className="p-6 mobile:px-12">
            <div className="flex flex-row justify-between items-center bg-neutral-veryPaleBlue p-4 rounded-xl">
              <div className="flex flex-row">
                <SvgIcon />
                <div className="ml-5">
                  <h2 className="text-base font-extrabold">{name_order}</h2>
                  <p className="text-base text-neutral-desaturatedBlue">
                    {price}
                  </p>
                </div>
              </div>
              <button className="text-primary-brightBlue underline text-sm hover:text-primary-brightBlue/70 font-bold">
                {change_btn}
              </button>
            </div>
          </div>
          <div className="flex flex-col px-6 mobile:px-12">
            <button className="bg-primary-brightBlue p-3 text-white font-bold rounded-xl shadow-orderButton hover:text-white/90 hover:bg-primary-brightBlue/70">
              {proceed_btn}
            </button>
            <button className="text-neutral-desaturatedBlue font-extrabold pt-6 pb-8 hover:text-black">
              {cancel_btn}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
