const Author = () => {
  return (
    <div className="w-full my-20 flex items-center justify-center gap-7">
      <div className="w-1/2 grid items-center justify-end">
        {/* {image} */}
        <div className="border shadow-lg w-[500px] h-[500px]"></div>
      </div>
      <div className="w-1/2 ">
        <div className="w-3/4 flex items-start justify-start flex-col gap-3 ">
          <small className="text-red-500">WELCOME TO PUBLISHING COMPANY</small>
          <h1 className="text-4xltext-white sm:text-5xl lg:text-6xl">Publishing Company Created By Authors</h1>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
            mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
          </p>
          <button className="bg-slate-400 px-5 py-2">
            <p className="font-semibold text-white">View All Our Auehorize</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Author;
