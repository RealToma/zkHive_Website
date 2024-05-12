import { Accardion } from './Components'
import styles from './Faq.module.css'

export const Faq = () => {
  return (
    <div className=' pt-[100px] lg:pt-[124px]'>
      <div className=' relative px-5 lg:px-0 container'>
        <img src='/img/circle.png' className='mt-10' />
        <div className=' absolute w-[800px] h-[50px] left-1/2 -translate-x-1/2  lg:top-[-100px] top-[-200px]'>
          <img src='/img/blur.png' className=' absolute z-[-1] top-0' />
          <img src='/img/wall.png ' />
        </div>

        <h1 className='text-[#FFF] text-center text-[22px] lg:text-[49px] not-italic font-bold leading-[130%]'>
          Frequently Asked QUestion
        </h1>
        <div
          className={` px-5 lg:p-[30px] ${styles.border} mt-[50px] flex flex-col gap-y-[15px] p-[30px]  `}
        >
          <Accardion
            description='$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $ZKHIVE on Uniswap'
            title='How to buy $ZKHIVE?'
          />
          <Accardion
            description='$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $ZKHIVE on Uniswap'
            title='What is $ZKHIVE contract address?'
          />
          <Accardion
            description='$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $ZKHIVE on Uniswap'
            title='Are there any $ZKhive aidrove?'
          />
          <Accardion
            description='$ZKHIVE is an ERC20 token developed on the ETH network and listed on uniswap. You can buy $ZKHIVE on Uniswap'
            title='How can i contact you?'
          />
        </div>
      </div>
    </div>
  )
}
