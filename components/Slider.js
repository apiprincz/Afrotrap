import React from "react";

import Image from "next/image";
import Styles from "../styles/Slider.module.css";

const Slider = () => {
  const images = [
    ["AfroSlide1a", "AfroSlide2a"],
    ["AfroSlide2b", "AfroSlide1b"],
  ];

  //   let line = useRef();
  //   const myTween = new TweenMax({ paused: true });

  //   useEffect(() => {
  //     animate();
  //   }, []);
  //   const animate = () => {
  //     const gsap = new gsap();
  //     setTimeout(() => {
  //       gsap
  //         .to(line.current, 0.5, { x: 100 })
  //         .to(line.current, 0.5, { y: 100 })
  //         .play();
  //     }, 10);
  //   };

  return (
    <>
      <div className={`row ${Styles.Slider}`}>
        <div className={` ${Styles.SliderContainer} `}>
          {images.map((image, index) => {
            return (
              <div className={Styles.SliderContent}>
                <Image
                  src={`/${image[0]}.png`}
                  alt={image[0]}
                  width={index === 0 ? "300" : "500"}
                  height={index === 0 ? "300" : "500"}
                  key={index}
                  className="col-md-12"
                />
                ;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
