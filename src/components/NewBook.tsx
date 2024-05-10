import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {
  books: Array<{
    img?: string;
    title: string;
    author: string;
    price: string;
  }>;
};

const NewBook = (props: Props) => {
  const { books } = props;

  useEffect(() => {
    Aos.init({
      once: false,
      duration: 500,
    });
  }, [scrollY]);

  return (
    <div className="flex flex-col">
      {/* TTITLE */}
      <div className="py-2 grid gap-2 text-center" data-aos="zoom-in">
        <p className="text-red-500">BOOKS</p>
        <h1 className="text-4xltext-white sm:text-5xl lg:text-6xl">New Release</h1>
      </div>
      {/* END TTITLE */}

      {/* BOOKS */}
      <div className="flex items-center justify-center flex-wrap my-10 gap-10">
        {books.map((book, index) => (
          <span className="w-[36rem] h-[20rem] border shadow-lg flex" key={index} data-aos={index > 2 ? "fade-right" : "fade-left"}>
            <div className={`w-1/2 border h-full ${index > 3 ? "order-0" : "order-1"}`}>{book.img}</div>
            <div className={`w-1/2 bg-gray-300 p-5 flex flex-col gap-2 ${index > 2 ? "order-1" : "order-0"}`}>
              <p className="text-red-500">${book.price}</p>
              <h1 className="text-3xl">{book.title}</h1>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </span>
        ))}
      </div>
      {/* END BOOKS */}
    </div>
  );
};

export default NewBook;
