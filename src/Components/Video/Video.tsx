export const Video = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='reltive w-[614px] h-auto'>
        <video
          className='absolute left-0 mix-blend-screen top-0 w-full'
          autoPlay
          muted
          loop
        >
          <source src='/img/bee.mp4' type='video/mp4' />
        </video>
        {/* <img src='/img/hero-img.png' className='absolute top-[84px]' /> */}
      </div>
    </div>
  )
}
