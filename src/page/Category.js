import React from "react";
import categoriesCard from "../assets/JsonData/categories_card.json";
import StatusCard from "../components/StatusCard";
const Category = () => {
  return (
    <div className="container mx-auto">
      <h2 className="my-7 text-xl font-bold">دسته بندی ها</h2>
        <div className="mx-0 sm:mx-6">
          <div className="flex flex-wrap gap-1 mb-10">
            {categoriesCard.map((item, index) => (
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" key={index}>
                <StatusCard
                  color={item["background-color"]}
                  icon={item.icon}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Category;
