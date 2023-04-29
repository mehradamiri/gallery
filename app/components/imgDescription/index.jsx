"use client";
import "./style.css";
const ImageDescription = ({ description }) => {
  return (
    <>
      <div
        className="text-xs w-full"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </>
  );
};

export default ImageDescription;
