import { Accardion } from './Components'
import styles from './Faq.module.css'

export const Faq = () => {
  return (
    <div className=' pt-[100px] lg:pt-[124px]'>
      <div className=' relative px-5 lg:px-0 container'>
        <img src='/img/circle.png' className='mt-10' />
        <div className=' absolute w-full lg:w-[800px] h-[50px] left-1/2 -translate-x-1/2  lg:top-[-100px] top-[-200px]'>
          <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
          <img src='/img/wall.png ' />
        </div>

        <h1 className='text-[#FFF] text-center text-[22px] lg:text-[49px] not-italic font-bold leading-[130%]'>
          FAQ
        </h1>
        <div
          className={` px-5 lg:p-[30px] ${styles.border} mt-[50px] w-full flex flex-col gap-y-[15px] p-[30px]  `}
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
  )
}
