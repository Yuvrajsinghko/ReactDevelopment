import React from "react";

const card = () => {
  return (
    <div className="h-full w-80 bg-teal-500 rounded-4xl relative overflow-hidden">
      <img
        className="h-full w-full object-cover "
        src="https://plus.unsplash.com/premium_photo-1764545333841-8dd805f5b7c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full text-amber-100 p-6 flex flex-col justify-between">
        <h2 className="bg-amber-100 rounded-full h-[2vw] w-[2vw] text-black flex justify-center items-center">
          1
        </h2>
        <div>
          <p className="text-[2.5vh]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            fugiat? Exercitationem voluptates quos ratione impedit.
          </p>
          <div className="text-[2vh] h-[1.5vw] w-[5vw] bg-amber-100 text-black rounded-full flex justify-center">
            <button >Satisfied</button>
            <button>
              <i class="ri-arrow-right-up-line "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
