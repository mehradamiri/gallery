"use client";

import { useRef, useState } from "react";
import ImageDescription from "./imgDescription";
import { Suspense } from "react";
import Loading from "../loading";

const Slider = ({ imgs }) => {
  const imgStyle = " tansition-transform duration-500 max-w-md object-cover";
  const [mouseDown, setMouseDown] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(false);
  const track = useRef(null);
  const main = useRef(null);

  const handleMouseMove = (e) => {
    if (mouseDown === 0) return;
    setIsRuning(true);
    const mouseDelta = parseFloat(mouseDown) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setNextPercentage(nextPercentage);

    if (track.current) {
      track.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    }
  };

  const handleMouseUp = () => {
    setMouseDown(0);
    setPrevPercentage(nextPercentage);
    setIsRuning(false);
  };

  const handleImgClick = (index, e) => {
    e.stopPropagation();
    setSelectedImgIndex(index);
  };

  const handleOverClick = (e) => {
    setSelectedImgIndex(false);
  };

  return (
    <>
      <div
        ref={main}
        onMouseDown={(e) => setMouseDown(e.clientX)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={() => handleMouseUp()}
        className="w-full h-full "
        onClick={(e) => handleOverClick(e)}
      >
        <div
          ref={track}
          className="flex gap-4 absolute left-1/2 top-1/2"
          style={{ transform: `translate(${nextPercentage}%, -50%)` }}
        >
          {imgs.map((img, i) => {
            return (
              <>
                <div className="w-max h-max relative flex justify-center items-center my-auto">
                  <img
                    key={i}
                    onClick={(e) => handleImgClick(i, e)}
                    src={img.url}
                    className={
                      selectedImgIndex === false
                        ? `${imgStyle} w-60  h-80  lg:w-max lg:h-max cursor-pointer opacity-100 z-10 select-none rounded-2xl   ${
                            isRuning ? "scale-90" : "scale-100"
                          }`
                        : selectedImgIndex === i
                        ? `${imgStyle} w-60 h-80  lg:w-max lg:h-max opacity-100 scale-150 shadow-2xl shadow-black z-100  mx-28 select-none `
                        : `${imgStyle} w-60 h-80 lg:w-max lg:h-max opacity-80 scale-90 -z-20  select-none`
                    }
                    style={{
                      objectPosition: `${nextPercentage + 100}% 50%`,
                    }}
                    draggable={false}
                  />

                  <div
                    className={`absolute top-1/2 font-bold -right-5 text-6xl z-50 text-black-300 ${
                      selectedImgIndex === i ? "" : "hidden"
                    }`}
                  >
                    <h1 className="text-white font-serif">{img.data.name}</h1>
                    <ImageDescription description={img.data.description} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
// "${imgStyle} opacity-100 scale-100"
export default Slider;
