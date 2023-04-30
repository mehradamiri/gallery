"use client";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://gallery-pb.iran.liara.run");

const DeleteItem = ({ itemID }) => {
  const handleClick = async (e) => {
    pb.collection("posts")
      .delete(itemID)
      .then((res) => e.target.classList.add("hidden"))
      .catch((err) => console.info(err));
  };
  return (
    <button
      onClick={(e) => handleClick}
      className="bg-red-600 text-white p-4 rounded-2xl hover:bg-red-400"
    >
      delete
    </button>
  );
};

export default DeleteItem;
