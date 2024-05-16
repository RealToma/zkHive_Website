/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from 'react'
import styles from './Accordion.module.css'
import { Minus } from '../../../../icons/Minus'
import { Plus } from '../../../../icons/Plus'

interface Props {
  title: string
  description: string | ReactNode
  ref?: any
}

export const Accardion = ({ title, description, ref }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      ref={ref}
      onClick={() => setOpen(!open)}
      className={`p-[30px] transition-all  duration-300 ${
        open ? 'max-h-[230px]' : 'max-h-[76px] lg:max-h-[90px]'
      } flex flex-col  overflow-hidden  cursor-pointer ${styles.border} `}
    >
      <div className='flex text-white justify-between items-center'>
        <p className='text-[#FFF]  text-xs lg:text-lg not-italic font-bold leading-[120%]'>
          {title}
        </p>
        {open ? <Minus /> : <Plus />}
      </div>
      <div>
        <hr className=' bg-transparent mt-[30px]' />
        <div className='pt-[30px]'>
          <p className='text-[#EBEDF0] text-base not-italic font-medium leading-[160%]'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
