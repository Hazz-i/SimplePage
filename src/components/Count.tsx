import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Count = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full pt -10 text-white pt-[20rem]" data-aos="fade-up">
      <div className="h-[15vh] bg-gray-500 flex items-center justify-center gap-14">
        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">
            <CountUp end={75678} />
          </h1>
          <p>ACTIVE READERS</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">
            <CountUp end={3040} />
          </h1>
          <p>TOTAL PAGES</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">
            <CountUp end={283} />
          </h1>
          <p>CUP OF COFFE</p>
        </span>

        <span className="w-72 flex flex-col items-center justify-center gap-2 text-center p-7">
          <h1 className="font-semibold text-4xl">
            <CountUp end={14500} />
          </h1>
          <p>FACEBOOK FANS</p>
        </span>
      </div>
    </div>
  );
};

export default Count;
