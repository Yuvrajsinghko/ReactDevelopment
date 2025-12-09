import React from "react";

const card = () => {
  return (
    <div className="h-full w-80 bg-teal-500 rounded-4xl relative overflow-hidden">
      <img
        className="h-full w-full object-cover "
        src="https://plus.unsplash.com/premium_photo-1764545333841-8dd805f5b7c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bg-teal-700 p-8 flex flex-col justify-between">
        <h2>1</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            fugiat? Exercitationem voluptates quos ratione impedit.
          </p>
          <button>Satisfied</button>
          <button>
            <i class="ri-arrow-right-up-line text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
