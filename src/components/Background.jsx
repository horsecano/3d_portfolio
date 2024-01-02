import Navbar from "./Navbar";
import React from "react";

const Background = () => {
  return (
    <section className="relativ z-0  bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <div className="relative w-full h-screen mx-auto">
          <div className=" xl:mt-12 w-full min-w-[500px] flex-row flex gap-10 overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Background;
