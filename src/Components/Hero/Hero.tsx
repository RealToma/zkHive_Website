import { Header } from '../../Layouts'
import { HiveBot } from '../../icons/HiveBot'
import { TelegramIcon } from '../../icons/Telegram'
import { Telegram2 } from '../../icons/Telgram2'
import { TwitterIcon } from '../../icons/Twitter'
import { Line } from './Components'
import styles from './Hero.module.css'

const SOCIAL_LINKS = [
  {
    icon: <TwitterIcon className='w-[50px] h-[50px]' />,
    link: 'https://twitter.com/zkhive',
  },
  {
    icon: <Telegram2 className='w-[50px] h-[50px]' />,
    link: 'https://t.me/zkhive',
  },
  {
    icon: <HiveBot className='w-[50px] h-[50px]' />,
    link: 'https://t.me/zkhive_bot',
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
        backgroundPosition: 'center',
      }}
      id='home'
    >
      <Header />
      <div className=' container px-5 lg:px-0 relative pt-[102px]'>
        <div className='w-full'>
          <h1 className='text-[28px] lg:text-[71px] text-white font-bold leading-[30px] lg:leading-[85.2px] text-left'>
            AI Powered decentralized
          </h1>
          <h1 className='text-[28px] lg:text-[71px] font-bold text-white leading-[30px] lg:leading-[85.2px] text-right'>
            firewall for Telegram groups and
            <br className='hidden lg:block' />
            individuals
          </h1>
        </div>
        <div className='flex pb-[300px] lg:pb-[179px]  justify-between flex-col lg:flex-row'>
          <div className=' w-full lg:w-1/2 -translate-y-[0px] flex items-center '>
            <div className='flex pl-[35px] pt-10 lg:pt-0 lg:pl-0 translate-y-0 gap-y-[100px] lg:translate-y-[-100px] flex-col lg:gap-y-[50px]'>
              {SOCIAL_LINKS.map((icon, index) => (
                <button
                  key={index}
                  className={`w-[25px] h-[25px]  xl:w-[93px] xl:h-[93px] text-black flex justify-center items-center `}
                >
                  <span className={` p-[22px] ${styles.social_button} `}>
                    {icon.icon}
                  </span>
                </button>
              ))}
            </div>
            <img
              className='hidden lg:block translate-y-[-100px]'
              src='/img/hero-img.png'
            />
          </div>
          <div className='w-full lg:w-1/2 pt-[85px]'>
            <p className=' text-base lg:text-2xl font-medium leading-[27px] lg:leading-[33.6px] text-[#EBEDF0]'>
              zkHive is revolutionizing the security of both individuals and
              crypto communities, by adding an AI layer of formal verification
              to the process.
            </p>
            <div className='flex flex-col justify-center gap-y-[30px] lg:flex-row gap-x-[30px] mt-[50px]'>
              <button
                className={` ${styles.hero_button}  text-2xl lg:text-base cursor-pointer px-[36px] py-[34px] lg:py-[11px] flex items-center gap-x-2.5 text-black`}
              >
                <TelegramIcon className='w-6 h-6  lg:h-auto lg:w-auto ' />
                Community
              </button>
              <button
                className={`px-[35px] relative text-2xl lg:text-base text-white py-[33px] lg:py-[11px] flex items-center gap-x-2.5 `}
              >
                <TelegramIcon className='w-6 h-6  lg:h-auto lg:w-auto ' />
                Buy Token
                <img
                  src='/img/outline-button.png'
                  className=' absolute top-0 left-0 w-full h-full'
                />
              </button>
              <button
                className={`${styles.hero_button}  text-2xl lg:text-base text-black cursor-pointer px-[33px] py-[34px] lg:py-[11px] flex items-center gap-x-2.5 `}
              >
                <HiveBot className=' w-[27px] h-[27px] lg:w-[17px] lg:h-[17px]' />
                Hive Bot
              </button>
            </div>
          </div>
        </div>

        <Line className=' absolute top-0 right-10' />
        <Line className=' absolute top-10 right-[50%]' />
        <Line className=' absolute top-[20px] h-[50%] left-[10%]' />
        <Line className=' absolute top-20 left-[30%]' />
        <Line className=' absolute top-[20px] left-[70%]' />
      </div>
      <button className=' absolute bottom-[150px] left-1/2 -translate-x-1/2'>
        <img src='./img/mouse.png' />
      </button>
    </div>
  )
}
