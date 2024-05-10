import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ListCateories = [
  {
    title: "Children's Book",
    icon: "bx bx-child",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
  },
  {
    title: "Romaance",
    icon: "bx bx-book-heart",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
  },
  {
    title: "Art & Architecture",
    icon: "bx bx-building-house",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
  },
  {
    title: "History",
    icon: "bx bx-history",
    content: "A small river named Duden flows by their place and supplies it with the necessary regelialia",
  },
];

const Caategory = () => {
  // AOS ANIMATE
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full h-[500px] absolute flex items-start justify-center gap-14 -top-24 " data-aos="fade-up">
      {ListCateories.map((category, index) => (
        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7" key={index}>
          <div className="w-44 h-44 rounded-full bg-gray-200 cursor-pointer duration-500 transition ease-in-out hover:bg-red-200 hover:text-white flex items-center justify-center">
            <i className={`${category?.icon} text-[5rem] `}></i>
          </div>
          <h1 className="font-bold">{category.title}</h1>
          <p>{category.content}</p>
        </span>
      ))}
    </div>
  );
};

export default Caategory;
