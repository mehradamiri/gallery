import Image from "next/image";
import PocketBase from "pocketbase";
import { Inter } from "next/font/google";
import Slider from "./components/slider";

const inter = Inter({ subsets: ["latin"] });
const pb = new PocketBase("https://gallery-pb.iran.liara.run");
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
      <Slider imgs={data} />
    </>
  );
}
