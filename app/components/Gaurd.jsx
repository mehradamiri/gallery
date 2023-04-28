"use client";
import { useEffect } from "react";
import PocketBase from "pocketbase";
import { redirect } from "next/navigation";
const pb = new PocketBase("http://127.0.0.1:8090");

const Gaurd = () => {
  useEffect(() => {
    if (!pb.authStore.isValid) {
      redirect("/login");
    }
  }, []);

  return <>{null}</>;
};
export default Gaurd;
