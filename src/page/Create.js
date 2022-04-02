import { useState } from "react";
import BannerTop from "../components/BannerTop";

const Create = () => {
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState("ali shamsian");
  const [ispending, setIspending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIspending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIspending(false);
    });
  };

  return (
    <>
      <BannerTop />

      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <form
              className="container text-center py-9 "
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between px-5">
              <button
                type="button"
                className="flex items-center px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                افزودن تصویر
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="w-4 mr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
              </button>
              <input
                className=" px-3  my-0 border-b-2 border-gray-800 text-slate-800 bg-transparent box-border block focus:outline-none "
                placeholder="+ حداکثر 5 تگ اضافه کنید"
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              </div>
              
              <input
                className="w-full px-6 py-10  my-0 border-none font-bold text-2xl text-slate-800 bg-transparent box-border block focus:outline-none "
                placeholder="عنوان را اینجا وارد کنید"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="w-full px-6 py-10  my-0  font-bold text-lg text-slate-800 bg-transparent box-border block focus:outline-none "
                placeholder="هرچی دوست داری بنویس ..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              {!ispending && (
                <button
                  type="submit"
                  className="mt-4 md:mt-0 appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase p-4 rounded shadow hover:bg-green-400"
                >
                  افزودن پست
                </button>
              )}
              {ispending && (
                <button
                  type="submit"
                  className="mt-4 md:mt-0 appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase p-4 rounded shadow hover:bg-green-400"
                >
                  در حال ارسال
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
