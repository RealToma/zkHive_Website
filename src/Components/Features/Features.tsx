import { AboutCard } from './Components'
import styles from './Features.module.css'
export const Features = () => {
  return (
    <div
      id='features'
      className='flex mt-[180px] flex-col lg:flex-row justify-between container px-5 lg:px-0'
    >
      <div className='w-full lg:w-[30%] flex flex-col gap-y-[50px] lg:gap-y-[250px]'>
        <AboutCard
          text='left'
          img='/img/time-clock.png'
          title='Real-Time Threat Detection'
          description='Lverage the connectivity AI capabilities to monitor user activity across all groups, preemptively detecting and preventing bot attacks, organized FUD, and account takeovers before they compromise your community’s security, ensuring constant vigilance and protection. '
        />
        <AboutCard
          text='left'
          img='/img/mask.png'
          title='Leverage The Decentralized Hive Mind'
          description='Harness the power of the first ever decentralized security network, built and evolves using AI peer-to-peer technology! Whenever threat is detect in any of zkHive’s groups or reported by individuals, it is immediately blocked in all of them.'
        />
      </div>
      <div className=' w-full  relative lg:w-[40%] flex justify-center items-center'>
        <div className=' absolute left-[-320px] top-[-150px] w-full'>
          <img src='/img/blur.png' className='!max-w-max w-auto' />
          <img
            src='/img/wall.png'
            className='!max-w-max  absolute w-auto top-0'
          />
        </div>
        <div className='w-full flex justify-center flex-col lg:block relative'>
          {/* <img src='/img/hero-img.png' className='' /> */}
          <video autoPlay muted loop style={{ mixBlendMode: 'screen' }}>
            <source src='/img/bee.mp4' type='video/mp4' />
          </video>
          <div
            className={`absolute left-1/2 -translate-x-1/2 backdrop-blur-sm top-[-210px] max-w-[536px] ${styles.border_card} ${styles.card_bg} py-[75px] rounded-[20px]`}
          >
            <h1 className='text-[49px] font-bold leading-[63.7px] text-center text-white'>
              zkHive Features
            </h1>
          </div>
        </div>
      </div>
      <div className=' w-full lg:w-[30%] flex flex-col gap-y-[50px] lg:gap-y-[250px]'>
        <AboutCard
          text='right'
          img='/img/ai.png'
          description='Seamlessly scan all files, links, GIFs, documents, and voice messages in Telegram, providing 365- day protection against malicious content and potential scams. '
          title='AI-Optimized Comprehensive File and Message Scanning'
        />
        <AboutCard
          text='right'
          img='/img/ai-optimiztion.png'
          description='Real-Time Under Attack mode for Telegram based on well known big-tech “Under Attack” modes, being immediately activate this special mode when being attacked, which would immediately analyse all user activities and leverage our immense Database to squash any attack in no time!'
          title='AI- Optimized Specialized Security Modes'
        />
      </div>
    </div>
  )
}
