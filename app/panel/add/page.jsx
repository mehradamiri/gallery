"use client";

import ImageUploader from "@/app/components/ImageUploader";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PocketBase from "pocketbase";
import { useRef, useState } from "react";
import Link from "next/link";

const AddArt = () => {
  const [description, setDescription] = useState("");
  const [artName, setArtName] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState(false);
  const Uploader = useRef(null);
  // const MySwal = withReactContent(Swal);

  const pb = new PocketBase("https://gallery-pb.iran.liara.run");

  const submitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("art", image);
    formData.append("name", artName);
    formData.append("description", description);
    const createdRecord = await pb
      .collection("posts")
      .create(formData)
      .then((res) =>
        Swal.fire({
          title: "اثر با موفقیت ثبت شد",
          icon: "success",
          position: "bottom-right",
        })
      )
      .catch((err) => {
        console.error(err);
        setErr(true);
      });
    setErr(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => submitHandle(e)}
        className="h-full w-full flex lg:flex-row-reverse flex-col-reverse justify-end"
      >
        <Link href={"/panel"}>
          <p className="text-xl text-sky-950 m-3">بازگشت</p>
        </Link>
        <div
          dir="ltr"
          className="h-5/6 mx-auto w-full p-5  flex flex-col justify-center items-center"
        >
          <p className="self-end text-2xl">توضیحات</p>
          <ReactQuill
            className="bg-white h-full w-full rounded-3xl text-2xl "
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
        <div className="lg:mx-3 w-min my-auto mx-auto">
          <ImageUploader setImage={setImage} />
          <div className="flex flex-col">
            <label className="mt-4 font-bold text-purple-800">نام اثر</label>
            <input
              className="w-full rounded-md py-2 px-2 border-2 border-black "
              value={artName}
              onChange={(e) => setArtName(e.target.value)}
            />
          </div>
          <p>{err && err}</p>
          <button className="flex w-full justify-center mt-5 bg-sky-600 text-white py-2 rounded-lg font-bold transition hover:bg-sky-700">
            ثبت
          </button>
        </div>
      </form>
    </>
  );
};

export default AddArt;
