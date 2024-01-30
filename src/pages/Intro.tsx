import useBackground from "../hooks/useBackground";
import LogoTextImg from "../assets/images/intro/logo_text.png";
import MaskImg from "../assets/images/intro/mask.png";
import EyeLeftImg from "../assets/images/intro/eye_left.png";
import EyeRightImg from "../assets/images/intro/eye_right.png";
import Butterfly1Img from "../assets/images/intro/butterfly_1.png";
import Butterfly2Img from "../assets/images/intro/butterfly_2.png";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Intro = () => {
  useBackground("#060215");

  const navigate = useNavigate();
  const gsapContainer = useRef<HTMLDivElement | null>(null);

  const [hovering, setHovering] = useState<null | "reality" | "fantasy">(null);

  const { contextSafe } = useGSAP({ scope: gsapContainer });

  const navigateToStory = contextSafe((mode: "reality" | "fantasy") => {
    gsap.to(["#intro_1", "#intro_2", "#intro_3", "#intro_4", "#intro_5"], {
      y: "50vh",
      scale: 0.7,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: {
        amount: 1,
        from: "random",
      },
      onComplete: () => navigate(`/story?mode=${mode}`),
    });
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-[54px]" ref={gsapContainer}>
      <a className="w-fit" href="https://www.imdb.com/title/tt0460791/" target="_blank" rel="noreferrer noopener">
        <img id="intro_1" src={LogoTextImg} alt="The Fall (2006 movie)" className="max-w-[148px]" />
      </a>

      <div className="relative">
        <div id="intro_2" className="relative">
          <img src={MaskImg} alt="Please press one of the eyes to start your experience" className="max-w-[664px]" />

          <button onClick={() => navigateToStory("reality")} className="absolute w-1/2 h-full top-0 left-0 z-30 group" onPointerEnter={() => setHovering("reality")} onPointerLeave={() => setHovering(null)}>
            <img src={EyeLeftImg} alt="" className={`max-w-[664px] absolute z-10 left-0 brightness-[1.1] top-0 h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in`} />
          </button>
          <button onClick={() => navigateToStory("fantasy")} className="absolute w-1/2 h-full top-0 right-0 z-30 group" onPointerEnter={() => setHovering("fantasy")} onPointerLeave={() => setHovering(null)}>
            <img src={EyeRightImg} alt="" className={`max-w-[664px] absolute z-10 brightness-[1.35] right-0 top-0 h-full opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 ease-in`} />
          </button>
        </div>

        <img id="intro_3" src={Butterfly1Img} className="absolute w-[424px] top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <img id="intro_4" src={Butterfly2Img} className="absolute bottom-0 left-0 w-[286px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <p id="intro_5" className="almendra text-white text-[24px] leading-[32px] font-bold mt-8">
        Would you gaze through the <span className={`${hovering === "reality" ? "text-[#D81616] drop-shadow-[0px_0px_4px_#FF3030]" : ""} transition-all ease-in duration-300`}>reality?</span> or the{" "}
        <span className={`${hovering === "fantasy" ? "text-[#5DD5EC] drop-shadow-[0px_0px_4px_#85EBFF]" : ""} transition-all ease-in duration-300`}>fantasy?</span>
      </p>
    </div>
  );
};

export default Intro;
