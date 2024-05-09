import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";

export default function App() {
  return (
    <>
      <div className="pt-5 px-10">
        <Header />
      </div>
      <Jumbotron />
      <Content />

      {/* <Footer /> */}
    </>
  );
}
