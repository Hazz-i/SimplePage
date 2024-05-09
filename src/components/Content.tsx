import Author from "./Authon";
import Caategory from "./Categrory";
import Count from "./Count";
import NewBook from "./NewBook";

const listNewBooks = [
  {
    title: "You Are Your Only Limit",
    price: " 12.00",
    author: "By John Nathan Muller",
  },
  {
    title: "101 Essays That Will Change The Way Your Thinks ",
    price: " 12.00",
    author: "By John Nathan Muller",
  },
  {
    title: "Your Soul Is A River",
    price: " 12.00",
    author: "By John Nathan Muller",
  },
  {
    title: "All The Letters I Should Have Sent",
    price: " 9.00",
    author: "By John Nathan Muller",
  },
  {
    title: "Milk & Honey",
    price: " 9.00",
    author: "By John Nathan Muller",
  },
  {
    title: "Happy",
    price: " 20.00",
    author: "By John Nathan Muller",
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
