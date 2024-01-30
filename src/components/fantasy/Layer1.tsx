import { useRef } from "react";
import Fantasy1 from "../../assets/images/story/fantasy_1.png";
import Fantasy2 from "../../assets/images/story/fantasy_2.png";
import Fantasy3 from "../../assets/images/story/fantasy_3.png";
import Fantasy4 from "../../assets/images/story/fantasy_4.png";
import Fantasy5 from "../../assets/images/story/fantasy_5.png";
import Fantasy6 from "../../assets/images/story/fantasy_6.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Layer1 = () => {
  const container1 = useRef<HTMLDivElement | null>(null);
  const container2 = useRef<HTMLDivElement | null>(null);
  const container3 = useRef<HTMLDivElement | null>(null);
  const container4 = useRef<HTMLDivElement | null>(null);
  const container5 = useRef<HTMLDivElement | null>(null);

  const layer1 = useRef<HTMLImageElement | null>(null);
  const layer2 = useRef<HTMLImageElement | null>(null);
  const layer3 = useRef<HTMLImageElement | null>(null);
  const layer4 = useRef<HTMLImageElement | null>(null);
  const layer5 = useRef<HTMLImageElement | null>(null);
  const layer6 = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container1.current,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
      });

      tl.to(layer1.current, {
        scale: 1.2,
        duration: 1,
        ease: "none",
      });
      tl.to(layer1.current, {
        scale: 1.4,
        // filter: "blur(30px)",
        opacity: 0,
        duration: 1,
        ease: "none",
      });
    },
    { scope: container1 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container2.current,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
      });

      tl.fromTo(
        layer2.current,
        { scale: 0.8, x: "-50%", y: "10%" },
        { scale: 1, duration: 2, ease: "none", x: "-50%", y: 0 }
      );
      tl.to(layer2.current, { scale: 1.2, duration: 1, ease: "none" });
      tl.to(layer2.current, { scale: 1.4, opacity: 0, duration: 1, ease: "none" });
    },
    { scope: container2 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container3.current,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
      });

      tl.fromTo(
        layer3.current,
        {
          scale: 0.6,
          x: "-20%",
          y: "20%",
          // filter: "blur(10px)",
        },
        {
          scale: 1,
          duration: 4,
          ease: "none",
          x: 0,
          y: 0,
          // filter: "blur(0px)",
        }
      );
      tl.fromTo(
        layer4.current,
        {
          scale: 0.6,
          x: "20%",
          y: "20%",
          // filter: "blur(10px)",
        },
        {
          scale: 1,
          duration: 4,
          ease: "none",
          x: 0,
          y: 0,
          // filter: "blur(0px)",
        },
        "<"
      );

      tl.to(layer3.current, {
        scale: 1.2,
        duration: 1,
        ease: "none",
        // filter: "blur(0px)",
      });
      tl.to(
        layer4.current,
        {
          scale: 1.2,
          duration: 1,
          ease: "none",
          // filter: "blur(0px)",
        },
        "<"
      );

      tl.to(layer3.current, {
        scale: 1.4,
        // filter: "blur(30px)",
        opacity: 0,
        duration: 1,
        ease: "none",
      });
      tl.to(
        layer4.current,
        {
          scale: 1.4,
          // filter: "blur(30px)",
          opacity: 0,
          duration: 1,
          ease: "none",
        },
        "<"
      );
    },
    { scope: container3 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container4.current,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
      });

      tl.fromTo(
        layer5.current,
        {
          scale: 0.6,
          x: "20%",
          y: "20%",
          // filter: "blur(15px)",
        },
        {
          scale: 1,
          duration: 6,
          ease: "none",
          x: 0,
          y: 0,
          // filter: "blur(0px)",
        }
      );
      tl.to(layer5.current, { scale: 1.2, duration: 1, ease: "none" });
      tl.to(layer5.current, {
        scale: 1.4,
        // filter: "blur(30px)",
        opacity: 0,
        duration: 1,
        ease: "none",
      });
    },
    { scope: container4 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container5.current,
          scrub: 1,
          start: "top top",
          end: "bottom top",
        },
      });

      tl.fromTo(
        layer6.current,
        {
          scale: 0.4,
        },
        {
          scale: 1,
          duration: 8,
          ease: "none",
        }
      );
      tl.to(layer6.current, { scale: 1, duration: 1, ease: "none" });
      tl.to(layer6.current, {
        scale: 1,
        y: "50vh",
        opacity: 0,
        duration: 1,
        ease: "none",
      });
    },
    { scope: container5 }
  );

  return (
    <div className="relative h-[1000vh]">
      {/* First */}
      <div className="h-[20%] absolute top-0 z-40" ref={container1}>
        <div className={`fixed top-0 left-0 h-screen w-full`}>
          <img
            ref={layer1}
            src={Fantasy1}
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ perspective: "550px", transformStyle: "preserve-3d" }}
          />
        </div>
      </div>

      {/* Second */}
      <div className="h-[40%] absolute top-0 z-30" ref={container2}>
        <div className={`fixed top-0 left-0 h-screen w-full`}>
          <img ref={layer2} src={Reality2} className="absolute bottom-0 left-1/2 w-full" />
        </div>
      </div>

      {/* Third */}
      <div className="h-[60%] absolute top-0 z-20" ref={container3}>
        <div className={`fixed top-0 left-0 h-screen w-full`}>
          <img ref={layer3} src={Reality3} className="absolute bottom-0 left-0 w-2/3" />
          <img ref={layer4} src={Reality4} className="absolute bottom-0 right-0 w-2/3" />
        </div>
      </div>

      {/* Fourth */}
      <div className="h-[80%] absolute top-0 z-10" ref={container4}>
        <div className={`fixed top-0 left-0 h-screen w-full`}>
          <img ref={layer5} src={Reality5} className="absolute bottom-0 right-0 w-1/2" />
        </div>
      </div>

      {/* Fifth */}
      <div className="h-[100%] absolute top-0 z-0" ref={container5}>
        <div className={`fixed top-0 left-0 h-screen w-full`}>
          <img
            ref={layer6}
            src={Reality6}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-full object-cover origin-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Layer1;
