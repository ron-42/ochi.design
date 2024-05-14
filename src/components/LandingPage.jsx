import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div data-scroll data-section data-scroll-speed="-.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-32 px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[5.6vw]  mt-4 mr-[1vw] rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase font-founders-grotesk text-[9vw] leading-[7vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-36 flex items-center font-neue-montreal justify-between py-5 px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="text-md font-light leading-none">{item}</p>;
        })}
        <div className="start flex gap-2 hover:text-black">
          <div className="start-text border-[1px] border-zinc-500 text-sm py-1 px-4 transition-all ease-in duration-200 text-light rounded-full flex justify-center items-center hover:bg-white hover:font-semibold">
            START THE PROJECT
          </div>
          <div className="icon-1 py-2 px-2 text-xl border-zinc-500 border text-light transition-all hover:translate-x-full hover:translate-y-full duration-200 ease-in  rounded-full hover:bg-white">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
