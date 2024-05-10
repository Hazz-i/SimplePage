import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const listCounts = [
  {
    countUP: 75678,
    title: "ACTIVE READERS",
  },
  {
    countUP: 3040,
    title: "TOTAL PAGES",
  },
  {
    countUP: 283,
    title: "CUP OF COFFE",
  },
  {
    countUP: 14500,
    title: "FACEBOOK FANS",
  },
];

const Count = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full pt -10 text-white pt-[20rem]" data-aos="fade-up">
      <div className="h-[15vh] bg-[#f5f4f0] flex items-center justify-center gap-14">
        {listCounts.map((list, index) => (
          <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7" key={index}>
            <h1 className=" text-4xl text-black">
              <CountUp end={list.countUP} />
            </h1>
            <p className="text-second">{list.title}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Count;
