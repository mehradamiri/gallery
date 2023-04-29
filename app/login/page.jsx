"use client";

import { useState } from "react";
import PocketBase from "pocketbase";
import { redirect } from "next/navigation";
import Link from "next/link";

const pb = new PocketBase("http://127.0.0.1:8090");

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [itsOK, setItsOk] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authData = await pb
      .collection("users")
      .authWithPassword(username, password);
    if (pb.authStore.isValid) setItsOk(true);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        dir="rtl"
        className="w-screen h-screen flex justify-center items-center"
      >
        <div className="w-3/4">
          <input
            value={username}
            type="text"
            onChange={(e) => handleUsernameChange(e)}
            placeholder="نام کاربری"
            className="w-full p-3 bg-slate-200 rounded-xl border-2 border-black"
          />
          <input
            value={password}
            type="password"
            onChange={(e) => handlePasswordChange(e)}
            placeholder="پسورد"
            className="w-full p-3 bg-slate-200 rounded-xl border-2 border-black mt-5 mb-1"
          />
          {itsOK ? (
            <Link href={"/panel"}>
              <button className="w-full p-3 bg-green-500 rounded-xl border-2 my-5 transition hover:border-black ">
                ورود
              </button>
            </Link>
          ) : (
            <button className="w-full p-3 bg-green-500 rounded-xl border-2 my-5 transition hover:border-black ">
              ورود
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default LoginPage;
