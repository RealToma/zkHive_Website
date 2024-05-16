import { useEffect, useRef } from 'react'
import { Accardion } from './Components'
import styles from './Faq.module.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Faq = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    gsap.fromTo(
      el,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <div className=' pt-[100px] lg:pt-[124px]'>
      <div ref={ref} className='relative lg:px-0 container'>
        <img
          src='/img/circle.png'
          className='mt-10 absolute top-[-120px] h-[183px] w-full'
        />
        <div className='relative'>
          <img
            src='/img/faq-img.png'
            className='absolute w-[426px] translate-y-[-50%] h-[193px] top-0 left-[50%] translate-x-[-50%]'
          />
          <img
            src='/img/FAQ-img-1.png'
            className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[250px] h-[250px]'
          />
        </div>
        <h1 className='text-[#FFF] text-center text-[22px] lg:text-[49px] not-italic font-bold leading-[130%]'>
          F.A.Q
        </h1>

        <div className='px-5 lg:px-0'>
          <div
            className={`px-5 lg:p-[30px] ${styles.border} mt-[50px] w-full flex flex-col gap-y-[15px] p-[30px]  `}
          >
            <Accardion
              description={
                <>
                  $ZKHIVE is an ERC20 token developed on the ETH network and
                  listed on Uniswap. You can buy $ZKHIVE on Uniswap:{' '}
                  <a
                    href='https://app.uniswap.org/swap?outputCurrency=0x750c3a0a0ce9984eeb8c5d146dff024b584e5e33&use=V2'
                    target='_blank'
                  >
                    here
                  </a>
                </>
              }
              title='How to buy $ZKHIVE?'
            />
            <Accardion
              description='The contract address is: 0x750c3a0a0ce9984eeb8c5d146dff024b584e5e33'
              title='What is $ZKHIVE contract address?'
            />
            <Accardion
              description='There are no airdrops for $ZKHIVE! Do not trust any source that tells you otherwise. Never share your private keys nor connect your wallet anywhere.'
              title='Are there any $ZKhive aidrove?'
            />
            <Accardion
              description='You can contact us via our official Email address. contact@zkhive.io'
              title='How can i contact you?'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
