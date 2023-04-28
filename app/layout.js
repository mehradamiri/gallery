import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-stone-300 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
