"use client";

import PocketBase from "pocketbase";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const pb = new PocketBase("http://127.0.0.1:8090");

const panelPage = () => {
  useEffect(() => {
    if (!pb.authStore.isValid) {
      redirect("login");
    }
    console.log(pb.authStore.isValid);
  }, []);
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex">
        <Link href="panel/edit">
          <div className="text-center mx-3">
            <div className="bg-white rounded-3xl border-8 border-purple-800 w-36 h-36 flex justify-center items-center transition hover:bg-slate-300 hover:border-sky-500 hover:scale-110">
              <div className="w-5 h-5 bg-purple-800 rounded-full bg-opacity-25 p-5 flex justify-center items-center transition ">
                <Image
                  className="absolute"
                  src="icons/cut.svg"
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <p className="text-xl font-bold mt-2">ویرایش اثر</p>
          </div>
        </Link>

        <Link href="panel/add">
          <div className="text-center mx-3">
            <div className="bg-white rounded-3xl border-8 border-purple-800 w-36 h-36 flex justify-center items-center transition hover:bg-slate-300 hover:border-sky-500 hover:scale-110">
              <div className="w-5 h-5 bg-purple-800 rounded-full bg-opacity-25 p-5 flex justify-center items-center transition ">
                <Image
                  className="absolute"
                  src="icons/plus.svg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <p className="text-xl font-bold mt-2">اضافه کردن اثر</p>
          </div>
        </Link>
      </div>
      <div>
        <Link href={"logout"}>
          <button className="w-40 py-2 rounded-lg bg-rose-500 text-white mt-8 transition hover:bg-rose-700">
            خروج
          </button>
        </Link>
      </div>
    </div>
  );
};

export default panelPage;
