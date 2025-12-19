import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState([20,30,20]);
  const btnCliked = () => {
    
    
    
    
  };
  return (
    <div className="mt-58 flex justify-center flex-col items-center gap-10">
      <h2 className=" text-[12vw]">{num}</h2>
      <button className="border text-8xl "  onClick={btnCliked}>Increment</button>
    </div>
  );
};

export default App;
