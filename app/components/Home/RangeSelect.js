import React, { useState } from "react";

function RangeSelect({onRadiusChange}) {
  const [radius, setRadius] = useState(50);

  return (
    <div className="mt-2">
      <h2 className="font-bold px-2">Select Radius in meter</h2>

      <input
        type="range"
        className="bg-gray-200 w-100 h-2 rounded-lg cursor-pointer appearance-none"
        min="10"
        max="100"
        step="5"
        value={radius}
        onChange={(e) => {
          const newVal = parseInt(e.target.value);
          setRadius(newVal);
          onRadiusChange(e.target.value);
          console.log(newVal);
        }}
      />

      <label className="block mt-2 text-center text-lg font-semibold text-red-400">
        {radius*100} m
      </label>
    </div>
  );
}

export default RangeSelect;
