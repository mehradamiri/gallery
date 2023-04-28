"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImageUploader = ({ setImage }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    // e.target.classList.add("border-purple-300");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      Uploader.current.value = "";
    };
    reader.readAsDataURL(file);
    setImage(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    setImage(file);
  };

  const Uploader = useRef(null);
  return (
    <>
      <div
        className="bg-white border-purple-800 rounded-lg w-72 mix-h-max box-border border-4 border-dashed flex flex-col text-center items-center cursor-pointer transition"
        onClick={() => Uploader.current.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        // onDragLeave={handleDragOverLeave}
      >
        {imagePreviewUrl && (
          <img
            src={imagePreviewUrl}
            alt="Preview"
            className="mt-3 w-16"
            draggable="false"
          />
        )}
        <div>
          <div className="mt-2">
            <p className="text-lg">عکس رو در این مکان رها کنید</p>
            <p className="text-lg">یا کلید کنید</p>
          </div>
        </div>
      </div>
      <input
        ref={Uploader}
        onChange={handleInputChange}
        type="file"
        className="hidden"
      />
    </>
  );
};

export default ImageUploader;
