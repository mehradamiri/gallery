import Image from "next/image";
import PocketBase from "pocketbase";
import { Inter } from "next/font/google";
import Slider from "./components/slider";

const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("http://127.0.0.1:8090");
export default async function Home() {
  const getData = async () => {
    const res = await pb.collection("posts").getFullList({ sort: "-created" });
    let urls = [];
    let imgs = [];
    for (let i = 0; i < res.length; i++) {
      const firstFilename = res[i].art;
      let url = pb.files.getUrl(res[i], firstFilename);
      urls.push(url);
      const data = res[i];
      imgs[i] = { data, url };
    }
    return imgs;
  };

  const data = await getData();
  return (
    <>
      <div className="flex p-3 bg-stone-200 items-center w-full h-16">
        <div className="bg-black h-full w-7 rounded-l-full"></div>
        <span className="mx-2 text-2xl font-bold">shayan gallery</span>
      </div>
      <Slider imgs={data} />
    </>
  );
}
