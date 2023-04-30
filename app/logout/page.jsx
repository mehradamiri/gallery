"use client";

import { useEffect } from "react";
import PocketBase from "pocketbase";
import { redirect } from "next/navigation";

const pb = new PocketBase("https://gallery-pb.iran.liara.run");

const logoutPage = () => {
  useEffect(() => {
    pb.authStore.clear();
    redirect("/login");
  }, []);
  return (
    <>
      <h1>!!!</h1>
    </>
  );
};

export default logoutPage;
