import Navbar from "./Navbar";
import React from "react";
import Background from "./Background";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../styles";

const Main = () => {
  const handleClick = (e) => {
    console.log("Hi!");
  };
  return (
    <section className="relativ z-0  bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <div className="relative w-full h-screen mx-auto">
          <div className=" xl:mt-12 w-full min-w-[500px] flex-col flex gap-10 overflow-hidden">
            <div
              className={`${styles.paddingX} absolute insert-0 top-[150px] max-w-7xl mx-auto flex flex-row item-center `}
            >
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
              </div>
              <p className={`${styles.heroHeadText} text-white ml-5`}>
                Click the ball <br />
                <span className={`${styles.heroHeadText} text-violet-500`}>
                  {`and Learn `}
                </span>
                more!
              </p>
            </div>

            <div className="flex flex-row flex-wrap h-[600px] justify-center gap-2 bg-transparent items-center sm:mt-[200px] md:mt-[300px] xl:mt-[200px] ml-[100px] mr-[100px] overflow-hidden">
              {technologies.map((technologies) => (
                <div
                  className="w-28 h-28 z-10 hover:cursor-pointer"
                  onClick={handleClick}
                  key={technologies.name}
                >
                  <BallCanvas icon={technologies.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
