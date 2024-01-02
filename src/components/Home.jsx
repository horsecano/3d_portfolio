import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relativ z-0  bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
