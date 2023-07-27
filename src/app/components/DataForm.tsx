"use client";

import { useState } from "react";

export default function DataForm() {
  const [data, setData] = useState([{ x: 0, y: 0 }]);

  const addRow = () => {
    setData((prevData) => [...prevData, { x: 0, y: 0 }]);
  };

  const handleInputChange = (index, axis, value) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][axis] = Number(value);
      return updatedData;
    });
  };

  return (
    <div className="flex flex-col text-slate-100">
      <div className="w-full flex justify-center py-1">
        <label htmlFor="">x-axis:</label>
        <input type="text" className="text-black" />
      </div>
      <div className="w-full flex justify-center py-1">
        <label htmlFor="">y-axis:</label>
        <input type="text" className="text-black" />
      </div>
      {data.map((point, index) => {
        return (
          <div key={index} className="w-full flex justify-center py-1">
            <div className="flex justify-end pr-2">
              <label htmlFor="">x{index + 1}:</label>
              <input
                type="number"
                className="text-black w-1/5"
                value={point.x}
                onChange={(e) => handleInputChange(index, "x", e.target.value)}
              />
            </div>
            <div className="flex justify-start pl-2">
              <label htmlFor="">y{index + 1}:</label>
              <input
                type="number"
                className="text-black w-1/5"
                value={point.y}
                onChange={(e) => handleInputChange(index, "y", e.target.value)}
              />
            </div>
          </div>
        );
      })}
      <button
        className="rounded-xl border border-slate-100 w-1/3 mx-auto mt-8 hover:text-black hover:bg-slate-100"
        onClick={addRow}
      >
        Add data
      </button>
    </div>
  );
}
