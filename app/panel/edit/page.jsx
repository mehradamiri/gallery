import DeleteItem from "@/app/components/deleteItem";
import PocketBase from "pocketbase";
const editArt = async () => {
  const pb = new PocketBase("https://gallery-pb.iran.liara.run");
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
      <div className="flex flex-col px-4 pt-6">
        {data.map((D, i) => {
          return (
            <div
              key={D.data.id}
              className="h-32 flex justify-between items-center p-2 rounded-xl w-full bg-white my-2"
            >
              <img src={D.url} className="h-full rounded-xl" />
              <p>{D.data.name}</p>
              <DeleteItem itemID={D.data.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default editArt;
