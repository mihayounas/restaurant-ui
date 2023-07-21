"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: " Fresh, Incredibly Crispy, and Served Piping Hot!",
    image: "/slide1.webp",
  },
  {
    id: 2,
    title: "Your Order Delivered Right to Your Doorstep!",
    image: "/slide2.jpeg",
  },
  {
    id: 3,
    title: "Family-Share Pizza: A Perfect Choice for Your Loved Ones!",
    image: "/slide3.jpeg",
  },
  {
    id: 4,
    title: "Family-Share Pizza: A Perfect Choice for Your Loved Ones!",
    image: "/slide4.webp",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8  font-bold">
        <h1 className="text-5xl text-center p-4 md:p-10 md:text-6xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
