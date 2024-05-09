import Author from "./Authon";
import Caategory from "./Categrory";
import Count from "./Count";
import NewBook from "./NewBook";

const Content = () => {
  return (
    <div className="w-full relative">
      <Caategory />
      <Count />
      <Author />
      <NewBook />
    </div>
  );
};

export default Content;
