import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const containerRef: any = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollHeight = containerRef.current?.scrollHeight;
    const scrollTop = containerRef.current?.scrollTop;
    const clientHeight = containerRef.current?.clientHeight;

    if (scrollHeight) {
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
    }
  };

  const scrollAction = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial scroll position
      return () => element.removeEventListener("scroll", handleScroll);
    }
  }, [containerRef]);

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="relative">
      <div className="pt-5 px-10">
        <Header />
      </div>
      <Jumbotron />
      <Content />

      <Footer />

      <button className="fixed bottom-5 right-5 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white" onClick={scrollAction}>
        {isAtBottom ? <ChevronUpIcon className="w-6" /> : <ChevronDownIcon className="w-6" />}
      </button>
    </div>
  );
}
