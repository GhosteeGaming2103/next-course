"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

const OnlineImage = () => {
  return (
    <CldImage
      width="960"
      height="600"
      src="ww2test"
      sizes="100vw"
      alt="Description of my image"
    />
  );
};

export default OnlineImage;
