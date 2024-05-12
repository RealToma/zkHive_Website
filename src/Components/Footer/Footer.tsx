import { TelegramIcon } from '../../icons/Telegram'
import { TwitterIcon } from '../../icons/Twitter'
import styles from './Footer.module.css'

const NAVIGATION = [
  {
    label: 'Home',
    path: '#home',
  },
  {
    label: 'About',
    path: '#about',
  },
  {
    label: 'Comparison',
    path: '#comparison',
  },
  {
    label: 'Hivebot',
    path: '#hivebot',
  },
  {
    label: 'Features',
    path: '#features',
  },
  {
    label: 'Roadmap',
    path: '#roadmap',
  },
]

const QUICK_LINKS = [
  {
    label: 'Uniswap',
    path: '#',
  },
  {
    label: 'Etherscan',
    path: '#',
  },
  {
    label: 'Dextools',
    path: '#',
  },
  {
    label: 'Github',
    path: '#',
  },
  {
    label: 'Medium',
    path: '#',
  },
]

const SOCIAL = [
  {
    label: 'Telegram Community',
    path: '#',
  },
  {
    label: 'Telegram Bot',
    path: '#',
  },
  {
    label: 'Twitter',
    path: '#',
  },
]

export const Footer = () => {
  return (
    <footer className='w-full'>
      <div
        className={` w-full lg:w-[729px] m-auto h-[3px] my-[90px] ${styles.line}`}
      ></div>

      <div className=' px-5 lg:px-0 container gap-y-8 flex-col lg:flex-row flex justify-between text-white'>
        <div>
          <a>
            <img src='/img/ZK-logo_menu.png' />
          </a>
          <div className='flex mt-[30px] gap-x-[15px]'>
            <button
              className={`${styles.button} flex justify-center items-center text-black border w-[35px] h-[35px] rounded-full`}
            >
              <TelegramIcon className='w-[16px] h-[16px]' />
            </button>
            <button
              className={` ${styles.button} text-black flex justify-center items-center border w-[35px] h-[35px] rounded-full`}
            >
              <TwitterIcon className='w-[16px] h-[16px]' />
            </button>
          </div>
          <p className='my-[10px] text-[#EBEDF0] text-base not-italic font-medium leading-[120%]'>
            Email:contact@zkhive.io
          </p>
          <p className='text-[#EBEDF0] text-base not-italic font-medium leading-[120%] opacity-[0.5]'>
            zkHive Token ©, All rights reserved.
          </p>
        </div>
        <div>
          <h1 className='text-[#FFF] text-2xl not-italic font-medium leading-[normal]'>
            Navigation
          </h1>
          <ul className='mt-[20px]'>
            {NAVIGATION.map((link, index) => (
              <li
                key={index}
                className='text-[#EBEDF0]  mt-[10px] text-base not-italic font-normal leading-[normal] tracking-[0.48px]'
              >
                <a
                  className='text-[#EBEDF0] mt-[10px] text-base not-italic font-normal leading-[normal] tracking-[0.48px]'
                  href={link.path}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='text-[#FFF] text-2xl not-italic font-medium leading-[normal]'>
            Quick Links
          </h1>
          <ul className='mt-[20px]'>
            {QUICK_LINKS.map((link, index) => (
              <li
                key={index}
                className='text-[#EBEDF0]  mt-[10px] text-base not-italic font-normal leading-[normal] tracking-[0.48px]'
              >
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='text-[#FFF] text-2xl not-italic font-medium leading-[normal]'>
            Social
          </h1>
          <ul className='mt-[20px]'>
            {SOCIAL.map((link, index) => (
              <li
                className='text-[#EBEDF0]  mt-[10px] text-base not-italic font-normal leading-[normal] tracking-[0.48px]'
                key={index}
              >
                <a>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={` w-full lg:w-[729px] m-auto h-[3px] my-[90px] ${styles.line}`}
      ></div>
      <p className='text-[#EBEDF0] mb-[36px] text-center text-base not-italic font-medium leading-[120%]'>
        zkHive Token ©, All rights reserved.
      </p>
    </footer>
  )
}
