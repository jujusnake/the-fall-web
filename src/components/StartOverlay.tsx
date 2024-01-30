import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OverlayRealityImg from "../assets/images/story/overlay_reality.png";
import OverlayFantasyImg from "../assets/images/story/overlay_fantasy.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const StartOverlay = () => {
  const [searchParams] = useSearchParams();
  const currentMode = useMemo(() => searchParams.get("mode") as "reality" | "fantasy" | null, [searchParams]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      tl.fromTo(textRef.current, { y: "-100%", opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
      tl.fromTo(imgRef.current, { y: "-100%" }, { y: 0, opacity: 1, duration: 1 }, ">-=0.5");
      tl.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 2, ease: "power2.in" }, "<");
      tl.fromTo(containerRef.current, { filter: "brightness(1)" }, { filter: "brightness(10)", duration: 2 }, "+=2");
      tl.fromTo(
        containerRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 1.5, onComplete: () => setIsVisible(false) },
        "<+=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      className={`w-full h-full fixed z-[999] top-0 left-0 bg-[#060215] ${isVisible ? "visible" : "invisible"}`}
      ref={containerRef}
    >
      <img
        ref={imgRef}
        src={currentMode === "reality" ? OverlayRealityImg : OverlayFantasyImg}
        alt=""
        className="w-full h-full object-cover"
      />
      <p
        ref={textRef}
        className={`absolute ${
          currentMode === "reality" ? "top-[16%]" : "bottom-[16%]"
        } font-bold left-1/2 -translate-x-1/2 z-50 text-white messiri text-[36px] leading-[48px] text-center drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.40)]`}
      >
        {currentMode === "reality" ? (
          <>
            You chose the reality
            <br />
            Sometimes, reality doesn’t go as we wishes
            <br />
            In fact, most of the times
          </>
        ) : (
          <>
            You chose the fantasy
            <br />
            Remember at all times. Fantasies are always
            <br />a mere reflection of the reality.
          </>
        )}
      </p>
    </div>
  );
};

export default StartOverlay;
