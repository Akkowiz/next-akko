"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const path = "/NavBarCarousel/";
  const Images = ["image1.jpg", "image2.png", "image3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 5000);
  });

  return (
    <Image
      src={path + Images[currentImageIndex]}
      alt="Navigation-Bar Image"
      className="w-40 h-full object-cover"
      width={200} // Set width here
      height={150}
    ></Image>
  );
}
