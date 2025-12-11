import React from "react";

const card = (props) => {
  let {id,imgSrc,content,tag}=props
  return (
    <div className="h-full w-[18vw]  rounded-4xl relative overflow-hidden">
      <img
        className="h-full w-full object-cover "
        src={imgSrc}
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full text-amber-100 p-6 flex flex-col justify-between">
        <h2 className="bg-amber-100 rounded-full h-[3vw] w-[3vw] text-black flex justify-center items-center">
          {id+1}
        </h2>
        <div>
          <p className="text-[2.5vh] font-bold">
            {content}
          </p>
          <div className="text-[2vh] h-[1.5vw] p-[1vh] bg-amber-100 w-fit text-black rounded-full flex justify-center items-center">
            <button >{tag}</button>
            <button>
              <i className="ri-arrow-right-up-line "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
