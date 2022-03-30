import { useState } from "react";
import BannerTop from "../components/BannerTop";

const Create = () => {
  const [title, setTitle] = useState();
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
            <form className="container text-center" onSubmit={handleSubmit}>
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
              {ispending && <button
                  type="submit"
                  className="mt-4 md:mt-0 appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase p-4 rounded shadow hover:bg-green-400"
                >
                  در حال ارسال
                </button>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
