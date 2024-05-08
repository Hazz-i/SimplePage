const Jumbotron = () => {
  return (
    <div className="bg-gray-300 h-[74vh] flex items-center">
      <div className="w-1/2 mx-auto ">
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
  );
};

export default Jumbotron;
