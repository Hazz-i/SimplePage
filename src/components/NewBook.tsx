type Prorps = {};

const NewBook = () => {
  return (
    <div className="flex flex-col">
      {/* TTITLE */}
      <div className="py-2 grid gap-2 text-center">
        <p className="text-red-500">BOOKS</p>
        <h1 className="text-4xltext-white sm:text-5xl lg:text-6xl">New Release</h1>
      </div>
      {/* END TTITLE */}

      {/* BOOKS */}
      <div className="flex items-center justify-center flex-wrap my-10 gap-10">
        <span className="w-[36rem] h-[20rem] border shadow-lg flex">
          <div className="w-1/2 border h-full"></div>
          <div className="w-1/2 bg-gray-300 p-5 flex flex-col gap-2">
            <p className="text-red-500">$12.00</p>
            <h1 className="text-3xl">You Are Your Only Limit</h1>
            <p className="text-gray-600">By John Nathan Mulle</p>
          </div>
        </span>
        <span className="w-[36rem] h-[20rem] border shadow-lg flex">
          <div className="w-1/2 border h-full"></div>
          <div className="w-1/2 bg-gray-300 p-5">
            <p className="text-red-500">$12.00</p>
            <h1>You Are Your Only Limit</h1>
            <p>By John Nathan Mulle</p>
          </div>
        </span>
        <span className="w-[36rem] h-[20rem] border shadow-lg flex">
          <div className="w-1/2 border h-full"></div>
          <div className="w-1/2 bg-gray-300 p-5">
            <p className="text-red-500">$12.00</p>
            <h1>You Are Your Only Limit</h1>
            <p>By John Nathan Mulle</p>
          </div>
        </span>
      </div>
      {/* END BOOKS */}
    </div>
  );
};

export default NewBook;
