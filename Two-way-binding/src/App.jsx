import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  // const boxRef  = useRef();

  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
      
  //     duration: 2,
  //     rotate: 720,
  //     delay: 1,
  //   });
  // });

  return (
    <main className="flex items-center justify-center w-full gap-10 min-h-screen">
      <div className="container flex flex-col items-center w-full">
        <div className="box h-55 w-65 bg-amber-600 rounded-3xl mt-5"></div>
        <div className="circle box h-65 w-65 bg-amber-700 rounded-full mt-5"></div>
      </div>
      <div className="container flex flex-col items-center w-full">
        <div className="box h-55 w-65 bg-cyan-500 rounded-3xl mt-5"></div>
        <div className="circle box h-65 w-65 bg-cyan-600 rounded-full mt-5"></div>
      </div>
    </main>
  );
};

export default App;
