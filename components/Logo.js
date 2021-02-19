import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/afrotrap.png"
        alt="Picture of the author"
        width={200}
        height={100}
      />
    </>
  );
};

export default Logo;
