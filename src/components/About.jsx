import React from "react";

function About() {
  return (
    <div data-scroll data-section data-scroll-speed="-.25" className="w-full py-20 px-14 bg-[#CDEA68] rounded-t-3xl text-black font-neue-montreal">
      <h1 className="text-5xl text-[#212121] w-[80%]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[2px] mt-20 border-[#00000050] flex gap-10">
        <div className="w-1/2 mt-20">
          <h1 className="text-6xl text-[#212121]">Our approach:</h1>
          <button className="uppercase px-8 py-4 mt-10 bg-black text-zinc-200 rounded-full flex items-center justify-between gap-8">
            Read More
            <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] mt-20 bg-[#a4ba5d] rounded-xl overflow-hidden ">
          <img
            className="object-cover w-full h-full "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
