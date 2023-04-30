export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="text-center flex w-screen h-screen justify-center items-center text-white text-9xl animate-spin">
      <div className="w-52 h-52 border-8 border-t-orange-400 rounded-full animate-spin"></div>
    </div>
  );
}
