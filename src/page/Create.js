import { useState } from "react";
import BannerTop from "../components/BannerTop";
import {
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
  MdCreate,
  MdTitle,
  MdTextFields,
} from "react-icons/md";
import { categories } from "../assets/JsonData/data";
import Loader from "../components/Loader";

const Create = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoadiing, setIsLoadiing] = useState(false);

  return (
    <>
      <BannerTop />
      <div className="container px-4 md:px-0 max-w-4xl mx-auto -mt-32 flex h-full w-full bg-white rounded overflow-hidden">
              <div className="w-full rounded-lg p-4 flex flex-col items-center justify-center  gap-8">
                {fields && (
                  <p className="w-full p-2 rounded-lg text-center text-lg font-semibold"></p>
                )}
                <div className="w-full py-4 border-b border-gray-300 flex items-center gap-2 ">
                  <MdTitle className="text-xl text-gray-700" />
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="عنوان پست ..."
                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                  />
                </div>
                <div className="w-full py-4 border-b border-gray-300 flex items-center gap-2">
                    <MdTextFields className="text-gray-700 text-2xl" />
                    <input
                      type="text"
                      required
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="پاورقی  ..."
                      className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                    />
                  </div>
                
                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                  <div className="w-full flex flex-col md:flow-row items-center gap-3">
                    <div className="w-full py-4 border-b border-gray-300 flex items-center gap-2">
                      <MdCreate className="text-gray-700 text-2xl" />
                      <input
                        type="text"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="داستانت را بنویس ..."
                        className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                  >
                    <option value="other" className="bg-white">
                      انتخاب دسته بندی
                    </option>
                    {categories.map((item) => (
                      <option
                        key={item.id}
                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                        value={item.urlParamName}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg ">
                  {isLoadiing ? (
                    <Loader />
                  ) : (
                    <>
                      {!imageAsset ? (
                        <>
                          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                              <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                              <p className="text-gray-500 hover:text-gray-700">
                                برای بارگذاری کلیک کنید
                              </p>
                            </div>
                            <input
                              type="file"
                              name="uploadimage"
                              accept="image/*"
                              className="w-0 h-0"
                            />
                          </label>
                        </>
                      ) : (
                        <>
                          <div className="relative h-full">
                            <img
                              src={imageAsset}
                              alt="uploaded image"
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              className="absolute bottom-0 right-0 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                            >
                              <MdDelete className="text-white" />
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="flex items-center w-full py-2">
                  <button
                    type="button"
                    className="ml-0 md:m-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold "
                  >
                    ذخیره کن
                  </button>
                </div>
              </div>
            </div>
    </>
  );
};

export default Create;
