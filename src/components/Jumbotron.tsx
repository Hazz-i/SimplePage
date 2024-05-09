import { Parallax } from "react-parallax";

const Jumbotron = () => {
  return (
    <Parallax
      className="relative w-full h-[74vh]"
      // blur={{ min: -15, max: 15 }}
      bgImage="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      strength={600}
    >
      <div className="h-[74vh] flex items-center absolute translate-x-10 translate-y-1">
        <div className="jumbotron w-1/2 mx-auto ">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none flex flex-col gap-2 items-start">
            <h1 className="text-4xltext-white sm:text-5xl lg:text-6xl">
              <span className="block text-white">Good books don't give up all their secrets at once</span>
            </h1>
            <p className="my-6 text-xl text-white">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <span className="flex gap-2">
              <button className="bg-gray-500 px-5 py-3 text-white font-">View All Books</button>
              <button className="bg-white px-5 py-3 font-semibold">Explore Now</button>
            </span>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Jumbotron;
