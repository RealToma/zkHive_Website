import { useEffect, useRef } from "react";
import { Card } from "./Components";
import styles from "./Roadmap.module.css";
const P1ROADS = [
  "Launch HiveBot",
  "Launch zkHive’s beta suspicious behavior system",
  "Connect zkHive’s different instances into the zkHive’s Inter-Connected Network",
  "Deploy and connect to our telegram group",
];

const P2ROADS = [
  "Launch Under Attack Mode",
  "Connect the HiveBot to other telegram groups",
  "Increase the adoption",
  "Stabilize and improve the Inter-Connected Network",
];

const P3ROADS = [
  "Establish partnerships with industry leaders in the telegram security landscape",
  "Establish partnerships cloud based security products",

  "Introduce Neural Network solutions",
];

const P4ROADS = [
  "Launch zkHive’s karma program",
  "Continuously perform security audits and platform improvements",
  "Form new partnerships with new major players",
  "Train the models on new datasets",
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Roadmap = () => {
  const topRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);
  const bottomRefP2 = useRef(null);

  useEffect(() => {
    const top = topRef.current;
    gsap.fromTo(
      top,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: top,
        },
      }
    );

    const right = rightRef.current;
    gsap.fromTo(
      right,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: right,
        },
      }
    );

    const left = leftRef.current;
    gsap.fromTo(
      left,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: left,
        },
      }
    );

    const btm = bottomRef.current;
    gsap.fromTo(
      btm,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: btm,
        },
      }
    );

    const bottom = bottomRefP2.current;
    gsap.fromTo(
      bottom,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: bottom,
        },
      }
    );
  }, []);

  return (
    <div id="roadmap" className={` pt-[100px]  lg:pt-[180px] `}>
      <div className=" gap-x-[29px] gap-y-[30px] px-5 lg:px-0 container grid grid-cols-1 lg:grid-cols-4">
        <div
          className={`block lg:hidden col-span-1 lg:col-span-2 ${styles.border} `}
        >
          <h1 className="text-[#FFF] text-center text-xl lg:text-[49px] not-italic font-bold leading-[130%]">
            Roadmap
          </h1>
        </div>
        <Card
          ref={leftRef}
          roads={P1ROADS}
          title="P1"
          className="pb-[27px] pt-[14px] !row-span-1 lg:!row-span-3"
        />
        <div
          ref={topRef}
          className={` hidden lg:block col-span-1 lg:col-span-2 ${styles.border} `}
        >
          <h1 className="text-[#FFF] text-center text-[49px] not-italic font-bold leading-[130%]">
            Roadmap
          </h1>
        </div>
        <Card
          ref={rightRef}
          roads={P4ROADS}
          title="P4"
          className="row-span-3 pt-[14px] pb-[27px] hidden lg:flex"
        />
        <Card
          ref={bottomRefP2}
          roads={P2ROADS}
          title="P2"
          className="row-span-2 pt-[14px] !justify-start pb-[27px]"
        />
        <Card
          ref={bottomRef}
          roads={P3ROADS}
          title="P3"
          className="row-span-2 pt-[14px] !justify-start pb-[27px]"
        />
        {/* <Card
          ref={leftRef}
          roads={P4ROADS}
          title='P4'
          className='row-span-3 pt-[14px] pb-[27px] block lg:hidden'
        /> */}
      </div>
    </div>
  );
};
