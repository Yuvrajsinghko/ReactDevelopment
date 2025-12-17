import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const updateNum = () => {
    setNum(num + 1);
  };
  const updateNum2 = () => {
    setNum(num - 1);
  };
  const jumpFive=()=>{
    setNum(num+5)
  }
  return (
    <div style={{ backgroundColor: { num } }} className="ml-[40vw] mt-[10vw]">
      <div className="flex justify-center flex-col items-center h-[30vw] w-[55vh] bg-gray-600 rounded-4xl">
        <h1 className="bg-amber-400 text-8xl">{num}</h1>
        <div className="flex justify-center items-center gap-6 mt-6">
          <button className="border-2 rounded-4xl text-7xl" onClick={updateNum}>
            +
          </button>
          <button
            className="border-2  rounded-4xl text-7xl"
            onClick={updateNum2}
          >
            -
          </button>
          <button className="border-2 rounded-4xl text-7xl" onClick={jumpFive}>
            Jump by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
