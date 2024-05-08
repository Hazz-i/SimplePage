const Count = () => {
  return (
    <div className="w-full pt -10 text-white pt-[20rem]">
      <div className="h-[15vh] bg-gray-500 flex items-center justify-center gap-14">
        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">75,678</h1>
          <p>ACTIVE READERS</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">3,040</h1>
          <p>TOTAL PAGES</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">283</h1>
          <p>CUP OF COFFE</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">14,500</h1>
          <p>FACEBOOK FANS</p>
        </span>
      </div>
    </div>
  );
};

export default Count;
