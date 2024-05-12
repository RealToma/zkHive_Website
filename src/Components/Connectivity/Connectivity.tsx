import styles from './Connectivity.module.css'

const CONNECTIVITY = [
  'Realtime 24/7 group protection',
  'Preemptive Mitigation',
  'Files Scan',
  'Anomaly Detection',
  'Peer-To-Peer Verification',
  'Anomaly Detection',
]

const ConnectivityCard = ({ title }: { title: string }) => {
  return (
    <div
      className={` ${styles.card_border} rounded-[12px] min-w-max ${styles.card_bg} py-4 text-white flex gap-x-3 px-[32px]`}
    >
      <div
        className={`w-[32px] h-[32px] rounded-full ${styles.small_cricle_bg}`}
      ></div>
      <p className='text-2xl font-bold leading-[33.6px] text-left'>{title}</p>
    </div>
  )
}

export const Connectivity = () => {
  return (
    <div className=' pt-[100px] lg:pt-[174px] w-full'>
      <div className='container px-[56px] gap-y-20 flex-col lg:flex-row flex gap-x-[78px]'>
        <div className='w-full flex justify-center lg:block lg:w-[40%]'>
          <img src='/img/powered-by-connectivity-ai.png' />
        </div>
        <div className=' w-full lg:w-[60%]'>
          <h1 className='text-white ml-[28px] text-[22px] lg:text-[49px] font-bold  leading-[34px] lg:leading-[63.7px] text-left title'>
            Powered by connectivity AI
          </h1>
          <div className='flex gap-x-[28px] '>
            <div className='relative'>
              <div
                className={` ${styles.small_cricle_bg} w-[1px] bg-[red] h-full`}
              />
              <div
                className={`w-[25px] absolute top-[25px] left-[-11.5px] h-[25px] rounded-full ${styles.small_cricle_bg} `}
              ></div>
              <div
                className={`w-[25px] absolute bottom-[20px] lg:bottom-[35px] left-[-11.5px] h-[25px] rounded-full ${styles.small_cricle_bg} `}
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
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full mt-[32px] max-w-full overflow-hidden inline-flex flex-nowrap'>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-reverse-infinite-scroll'>
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
          {CONNECTIVITY.reverse().map((item) => (
            <li>
              <ConnectivityCard title={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
