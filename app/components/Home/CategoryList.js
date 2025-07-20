import React, { useState } from "react";
import Data from "../../../shared/Data";
import Image from "next/image";

function CategoryList({onCategoryChange}) {
  const [CategoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="p-1 bg-gradient-to-br from-red-50 via-yellow-50 to-white rounded-xl">
      <h2 className="text-2xl font-extrabold mb-6 text-center text-red-700 tracking-wide drop-shadow">
        🌼Select Type of Puja Place🌼
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {CategoryList.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-2xl shadow-lg border transition-all 
    ${selectedCategory === item.id? "border-red-500 grayscale-0 scale-105 shadow-xl"
        : "border-yellow-300 grayscale hover:scale-105 hover:shadow-lg hover:border-red-400"
    } 
    transform duration-300 ease-in-out`}
            onClick={() => {setSelectedCategory(item.id);  onCategoryChange(item.id)}}
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover rounded-t-2xl w-full h-30 p-1"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-700">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
