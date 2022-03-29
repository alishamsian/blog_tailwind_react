import React from "react";

const LeadCard = () => {
  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <a href="#" className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div
            classNameflex-1
            bg-white
            rounded-t
            rounded-b-none
            overflow-hidden
            shadow-lg
          >
            hiiiiiiii
          </div>
        </div>
        <div className="w-full md:w-2/3 rounded-t">
          <img
            src="https://source.unsplash.com/collection/494263/800x600"
            class="h-full w-full shadow"
          />
        </div>
      </a>
    </div>
  );
};

export default LeadCard;
