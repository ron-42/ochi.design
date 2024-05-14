import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center gap-5 px-14 font-neue-montreal">
      <div className="card-container h-[50vh] w-1/2">
        <div className="card rounded-xl relative w-full h-full bg-[#004d43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] left-7 bottom-7 rounded-full text-[#CDEA68] border-[#CDEA68] tracking-tight ">
            &copy;2019-2023
          </button>
        </div>
      </div>
      <div className="card-container flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121] flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] left-7 bottom-7 rounded-full tracking-tight uppercase">
            Rating 5.0 on cluch
          </button>
        </div>
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] left-7 bottom-7 rounded-full tracking-tight uppercase">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
