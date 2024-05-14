import styles from './Hivebot.module.css'
export const Hivebot = () => {
  return (
    <div
      className='pt-[100px] w-full lg:pt-[180px] relative lg:px-0 px-5'
      id='hivebot'
    >
      <h1 className=' text-[22px] lg:text-[49px] mb-[50px] text-white  font-bold leading-[63.7px] text-center title'>
        Hivebot Is Now Live
      </h1>
      <div
        className={`m-auto rounded-[20px] ${styles.border} w-full lg:w-[1021px] h-full lg:h-[562.5px] overflow-hidden z-[999] flex justify-center `}
      >
        <video
          className='w-full rounded-[20px] h-full '
          src='/img/video_hivebot.mp4'
          controls
          autoPlay
          muted
        />
      </div>
      <div className=' absolute  bottom-[-400px] left-[-600px] w-full'>
        <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
        <img src='/img/wall.png ' />
      </div>
      <div className=' absolute  top-[-200px] right-0 lg:right-[-600px] w-full'>
        <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
        <img src='/img/wall.png ' />
      </div>
    </div>
  )
}
