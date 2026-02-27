import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import GsapPrac from "./gsapPrac";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [roti, setRot] = useState(0);
  const imgRef = useRef();
  const randomX = gsap.utils.random(-300, 300, 10);
  const randomY = gsap.utils.random(-300, 300, 10);
  const rot = gsap.utils.random(-360, 360, 30);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        x: x,
        y: y,
        duration: 0.7,
        rotate: roti,
      });
    },
    { scope: "main", dependencies: [x, y, roti] },
  );
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen w-full bg-zinc-900 gap-20">
        {/* <div className="b flex flex-col items-center gap-5">
        <div className="circle h-55 w-55 bg-amber-700 rounded-full "></div>
        <div className="box h-55 w-55 bg-amber-600 rounded-3xl mb-5"></div>
      </div>

      <div className="a flex flex-col items-center gap-5">
        <div className="circle h-55 w-55 bg-cyan-600 rounded-full"></div>
        <div className="box h-55 w-55 bg-cyan-500 rounded-3xl mb-5"></div>
      </div> */}

        <img
          onClick={() => {
            setX(randomX);
            setY(randomY);
            setRot(rot);
          }}
          ref={imgRef}
          className="dragon h-45 w-45"
          src="./dragonfly.png"
          alt="Dragon Fly Image"
        />
      </main>
      <section className="min-h-screen w-full bg-zinc-900">
        <GsapPrac />
      </section>
    </>
  );
};

export default App;
