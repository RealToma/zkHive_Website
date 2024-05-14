import { Star } from '../../../../icons/Star'
import styles from './Card.module.css'

interface Props {
  className?: string
  title: string
  roads: string[]
}

export const Card = ({ className, roads, title }: Props) => {
  return (
    <div
      className={`${styles.card_bg} flex items-center flex-col justify-center rounded-[12px] ${className} `}
    >
      <div>
        <h1 className='text-[#FFF] text-center  text-[35px] lg:text-[61px] not-italic font-bold leading-[120%]'>
          {title}
        </h1>
        <div className={`w-[97px]  m-auto h-[1px] ${styles.line}`}></div>
        <div className={`w-[117px] mt-1 m-auto h-[1px] ${styles.line}`}></div>
      </div>
      <div>
        <ul className='px-[16px] flex flex-col gap-y-4 mt-10'>
          {roads?.map((road) => (
            <li className='flex items-start gap-x-3 text-[#EBEDF0] text-sm not-italic font-normal leading-[160%]'>
              <div>
                <Star className='w-[22px] h-[22px]' />
              </div>
              {road}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
