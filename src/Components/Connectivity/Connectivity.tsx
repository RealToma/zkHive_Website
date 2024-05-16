import styles from './Connectivity.module.css'

const CONNECTIVITY = [
  '/img/scroll-images/scroll_img_1.png',
  '/img/scroll-images/scroll_img_2.png',
  '/img/scroll-images/scroll_img_3.png',
  '/img/scroll-images/scroll_img_4.png',
  '/img/scroll-images/scroll_img_5.png',
  '/img/scroll-images/scroll_img_6.png',
]

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const Connectivity = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const el = leftRef.current
    gsap.fromTo(
      el,
      { x: -400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
    const el1 = rightRef.current
    gsap.fromTo(
      el1,
      { x: 400, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <div className=' pt-[100px] lg:pt-[174px] w-full'>
      <div className='container px-5 lg:px-0 gap-y-20 flex-col lg:flex-row flex gap-x-[78px]'>
        <div
          ref={leftRef}
          className='w-full flex justify-center lg:block lg:w-[40%]'
        >
          <img src='/img/powered-by-connectivity-ai.png' />
        </div>
        <div ref={rightRef} className=' w-full lg:w-[60%]'>
          <h1 className='text-[28px] ml-[28px] lg:text-[49px] font-bold lg:leading-[63.7px] text-center lg:text-left text-white title'>
            Powered by connectivity AI
          </h1>
          <div className='flex gap-x-[28px] '>
            <div className='relative'>
              <div className={` ${styles.small_cricle_bg} w-[1px] h-full`} />
              <div
                className={`w-[25px] absolute top-[25px] left-[-11.5px] h-[25px] rounded-full ${styles.small_cricle_bg} `}
              ></div>
              <div
                className={`w-[25px] absolute bottom-[25px] lg:bottom-[30px] left-[-11.5px] h-[25px] rounded-full ${styles.small_cricle_bg} `}
              ></div>
            </div>
            <div>
              <p className=' text-xs lg:text-xl mt-6 text-[#EBEDF0] font-normal leading-4 lg:leading-8 text-left'>
                zkHive is a state-of-the-art security product that constantly
                filters out potentially malicious activity in order to keep
                crypto communities free of fraudulent content, bots and
                malicious actors before they get a chance to act.
              </p>
              <div className='py-[28px]'>
                <p className=' text-xs lg:text-xl mt-6 text-[#EBEDF0] font-normal leading-4 lg:leading-8 text-left'>
                  Bot Intrusion Detection and Prevention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-[100px] max-w-full overflow-hidden inline-flex flex-nowrap'>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full mt-[32px] max-w-full overflow-hidden inline-flex flex-nowrap'>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-reverse-infinite-scroll'>
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
