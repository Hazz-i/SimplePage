import Author from "./Authon";
import Caategory from "./Categrory";
import Count from "./Count";

const Content = () => {
  return (
    <div className="w-full relative">
      <Caategory />
      <Count />
      <Author />
    </div>
  );
};

export default Content;
