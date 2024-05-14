import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);

  return (
    <div className="w-full py-20 font-neue-montreal">
      <div className="w-full px-14 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="px-14">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
            className="card-container relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[9vw] leading-none font-founders-grotesk">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block translate-y-full"
                  initial={{ y: "100%" }}
                  animate={isHovering1 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            className="card-container relative w-1/2 h-[75vh] border-[1px] border-zinc-500 rounded-xl"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[9vw] leading-none font-founders-grotesk">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  className="inline-block translate-y-full"
                  initial={{ y: "100%" }}
                  animate={isHovering2 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-300 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
