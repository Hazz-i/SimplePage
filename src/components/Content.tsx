import Author from "./Author";
import Caategory from "./Categrory";
import Count from "./Count";
import NewBook from "./NewBook";

const listNewBooks = [
  {
    title: "ESTHER",
    price: " 12.00",
    author: "By John Nathan Muller",
    img: "https://images.unsplash.com/photo-1611179892587-26e9518c90d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxib29rfGVufDB8fDB8fHww",
  },
  {
    title: "PSAEMS ",
    price: " 12.00",
    author: "By John Nathan Muller",
    img: "https://images.unsplash.com/photo-1585785673770-f16d239b825a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxib29rfGVufDB8fDB8fHww",
  },
  {
    title: "HOLLY SCRIPTURES",
    price: " 12.00",
    author: "By John Nathan Muller",
    img: "https://images.unsplash.com/photo-1512239951320-ee158ee09e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxib29rfGVufDB8fDB8fHww",
  },
  {
    title: "INSTITUTIES OF THE CHRISTAN RELIGION",
    price: " 9.00",
    author: "By John Calvin",
    img: "https://images.unsplash.com/photo-1564540400309-0745c2a66a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxib29rfGVufDB8fDB8fHww",
  },
  {
    title: "Milk & Honey",
    price: " 9.00",
    author: "By John Nathan Muller",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "ISALAH",
    price: " 20.00",
    author: "By John Nathan Muller",
    img: "https://images.unsplash.com/photo-1584656950258-bb3345fb0a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHxib29rfGVufDB8fDB8fHww",
  },
];

const Content = () => {
  return (
    <div className="w-full relative">
      <Caategory />
      <Count />
      <Author />
      <NewBook books={listNewBooks} />
    </div>
  );
};

export default Content;
