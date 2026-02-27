import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const GsapPrac = () => {
    const scopeRef = useRef();
    const { contextSafe } = useGSAP();

    const rotateBox = contextSafe(() => {
        gsap.to(".box", {
            rotate: 360,
            duration: 2,
        });
    });

    return (
        <main ref={scopeRef} className="flex flex-col justify-center items-center h-screen gap-5">
            <button
                onClick={rotateBox}
                className="text-3xl border-2 rounded-2xl p-4 text-white hover:bg-zinc-500"
            >
                Animate
            </button>
            <div className="box h-55 w-55 bg-cyan-500 rounded-3xl mb-5"></div>
        </main>
    );
};

export default GsapPrac;
