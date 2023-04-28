import Gaurd from "../components/Gaurd";

export default function Layout({ children }) {
  return (
    <>
      <Gaurd />
      <div dir="rtl" className="w-screen h-screen flex flex-col bg-['#EDEDED']">
        {children}
      </div>
    </>
  );
}
