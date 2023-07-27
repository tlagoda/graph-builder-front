"use client";

import DataForm from "./components/DataForm";
import { useState } from "react";
import LineChart from "./components/LineChart";

export default function Home() {
  const [points, setPoints] = useState([{ x: 0, y: 0 }]);

  return (
    <main className="min-h-screen">
      <div className="w-screen h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex">
        <div className="w-1/4 h-full border-r border-white"></div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-2/3">
            <LineChart data={points} />
          </div>
          <div className="w-full h-1/3 border-t border-white"></div>
        </div>
        <div className="w-1/4 h-full border-l border-white">
          <DataForm points={points} setPoints={setPoints} />
        </div>
      </div>
    </main>
  );
}
