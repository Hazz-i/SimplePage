const headerList = ["HOME", "ABOUT", "COMING SOON", "TOP SELLER", "BOOKS", "AUTHOR", "BLOG", "CONTACT"];

const Header = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-10">
      {/* HEADER TOP*/}
      <div className="flex justify-between items-center flex-wrap w-full">
        {/* SOCIAL MEDIA */}
        <div className="flex gap-3 items-center w-1/3">
          <span className="border rounded-full px-2 py-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <i className="bx bxl-instagram" />
          </span>
          <span className="border rounded-full px-2 py-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <i className="bx bxl-facebook" />
          </span>
          <span className="border rounded-full px-2 py-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white transition duration-300 ease-in-out">
            <i className="bx bxl-twitter" />
          </span>
        </div>
        {/* END SOCIAL MEDIA */}

        {/* TITLE */}
        <div className="flex  flex-col items-center justify-center w-1/3">
          <h1 className="text-3xl font-semibold">
            PUBLISHING <span className="text-red-500">COMPANY</span>
          </h1>
          <p className="text-xl text-gray-400 font-serif font-thin">BOOK PUBLISHING COMPANY</p>
        </div>
        {/* END TITLE */}

        {/* SEARCH */}
        <div className="serach w-1/3 flex justify-end">
          <input type="text" className="w-80 border bg-gray-100 rounded-full px-4 py-2 focus:outline-none" placeholder="Search"></input>
        </div>
        {/* END SEARCH */}
      </div>
      {/* END HEADER TOP*/}

      <div className="pt-10 pb-5 w-full">
        <hr className=" border-gray-100" />
      </div>

      {/*  HEADER BOTTOM*/}
      <ul className="flex item-center justify-center gap-5 font-medium">
        {headerList.map((item) => (
          <li key={item} className="hover:cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out">
            {item}
          </li>
        ))}
      </ul>
      {/* END HEADER BOTTOM*/}
    </div>
  );
};

export default Header;
