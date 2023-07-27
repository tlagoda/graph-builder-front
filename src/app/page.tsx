import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-screen h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex">
        <div className="w-1/4 h-full border-r border-white"></div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-2/3"></div>
          <div className="w-full h-1/3 border-t border-white"></div>
        </div>
        <div className="w-1/4 h-full border-l border-white"></div>
      </div>
    </main>
  );
}
