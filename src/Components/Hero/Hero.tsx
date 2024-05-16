import { Header } from '../../Layouts'
import { HiveBot } from '../../icons/HiveBot'
import { Medium } from '../../icons/Medium'
import { TelegramIcon } from '../../icons/Telegram'
import { Telegram2 } from '../../icons/Telgram2'
import { TwitterIcon } from '../../icons/Twitter'
import { Line } from './Components'
import styles from './Hero.module.css'

const SOCIAL_LINKS = [
  {
    icon: <TwitterIcon className='w-[50px] h-[50px]' />,
    link: 'https://x.com/zkhive',
  },
  {
    icon: <Telegram2 className='w-[50px] h-[50px]' />,
    link: 'https://t.me/zkhive_token',
  },
  {
    icon: <Medium className='w-[50px] h-[50px]' />,
    link: 'https://medium.com/@zkhive',
  },
]

export const Hero = () => {
  return (
    <div
      className='w-full h-full min-h-screen bg-black relative'
      style={{
        backgroundColor: '#000',
        background: "url('/img/hero-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      id='home'
    >
      <Header />
      <div className=' container px-5 lg:px-0 relative pt-[102px]'>
        <div className='w-full'>
          <h1 className='text-[28px] lg:text-[71px] text-white font-bold leading-[30px] lg:leading-[85.2px] text-center lg:text-left title'>
            AI Powered decentralized
          </h1>
          <h1 className='text-[28px] lg:text-[71px] font-bold text-white leading-[30px] lg:leading-[85.2px] text-center lg:text-right title'>
            firewall for Telegram groups and
            <br className='hidden lg:block' />
            individuals
          </h1>
        </div>
        <div className='flex relative items-center  pb-[300px] lg:pb-[179px]  justify-between flex-col lg:flex-row'>
          <div className='z-[10] relative w-full lg:w-1/2 -translate-y-[0px] flex items-center '>
            <div className='flex pl-10 pr-10 pt-20 lg:pt-0 lg:pl-0 translate-y-0 gap-y-[100px] lg:translate-y-[-100px] w-full justify-between lg:justify-normal lg:w-auto flex-row lg:flex-col lg:gap-y-[50px]'>
              {SOCIAL_LINKS.map((icon, index) => (
                <div className={'btn'}>
                  <button
                    key={index}
                    className={`w-[15px] h-[15px]  lg:w-[93px] lg:h-[93px] text-black flex justify-center items-center z-[100]`}
                    onClick={() => window.open(icon.link)}
                  >
                    <span className={` p-[22px] ${styles.social_button} `}>
                      {icon.icon}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            style={{ mixBlendMode: 'screen' }}
            className='absolute hidden object-cover lg:block left-[-0px] top-[-230px] '
          >
            <source src='/img/bee.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='w-full lg:w-1/2 pt-[85px]'>
            <p className='text-base lg:text-2xl font-medium leading-[27px] lg:leading-[33.6px] text-[#EBEDF0]'>
              zkHive is revolutionizing the security of both individuals and
              crypto communities, by adding an AI layer of formal verification
              to the process.
            </p>
            <div className='flex justify-center gap-y-[30px] px-4 lg:px-0 flex-row gap-x-1 lg:gap-x-[30px] mt-[50px]'>
              <div className={'btn'}>
                <button
                  className={` ${styles.hero_button}  text-xs lg:text-base cursor-pointer px-3 lg:px-[36px] py-[11px] flex items-center justify-center gap-x-2.5 text-black min-w-[50%] lg:min-w-[185px]`}
                  onClick={() => window.open('https://t.me/zkhive_token')}
                >
                  <TelegramIcon className='w-6 h-6  lg:h-auto lg:w-auto ' />
                  community
                </button>
              </div>
              <div className={'btn'}>
                <button
                  className={`${styles.hero_button} text-xs lg:text-base cursor-pointer px-3 lg:px-[36px] py-[11px] flex justify-center items-center gap-x-2.5 text-black min-w-[50%] lg:min-w-[185px] `}
                  onClick={() => window.open('https://t.me/zkhive_bot')}
                >
                  <HiveBot className=' w-[27px] h-[27px] lg:w-[17px] lg:h-[17px]' />
                  hive Bot
                </button>
              </div>
            </div>
          </div>
        </div>
        <Line className=' absolute top-0 right-10' />
        <Line className=' absolute top-10 right-[50%]' />
        <Line className=' absolute top-[20px] h-[50%] left-[10%]' />
        <Line className=' absolute top-20 left-[30%]' />
        <Line className=' absolute top-[20px] left-[70%]' />
      </div>
      <div className='animate-bounce absolute bottom-[100px] left-[50%]'>
        <button className=' bottom-[100px] left-[50%] -translate-x-1/2'>
          <img src='./img/mouse.png' />
        </button>
      </div>
    </div>
  )
}
