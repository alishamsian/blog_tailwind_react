import React from "react";

const LeadCard = () => {
  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <a href="#" className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div
            className="flex-1
            bg-white
            rounded-t
            rounded-b-none
            overflow-hidden
            shadow-lg"
          >
            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
              GETTING STARTED
            </p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              Lorem ipsum dolor sit amet.👋
            </div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img
                className="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 rounded-t">
          <img
            src="https://source.unsplash.com/collection/494263/800x600"
            className="h-full w-full shadow"
          />
        </div>
      </a>
    </div>
  );
};

export default LeadCard;
