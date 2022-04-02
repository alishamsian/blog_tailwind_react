import React from "react";

const SingalPost = () => {
  return (
    <>
    <div className="text-center pt-16 md:pt-32">
      <p className="text-sm md:text-base text-green-500 font-bold">
        13 فروردین 1401 <span className="text-gray-900">/</span> اولین پست من
      </p>
      <h1 className="font-bold break-normal text-3xl md:text-5xl">
        خوش اومدین به وبلاگ من
      </h1>
    </div>
    	<div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{backgroundImage:`url('https://source.unsplash.com/collection/1118905/')`, height: "75vh"}}></div>
      </>
  );
};

export default SingalPost;
