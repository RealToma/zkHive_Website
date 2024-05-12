import styles from './AboudCard.module.css'

interface Props {
  img: string
  title: string
  description: string
  text: 'left' | 'right'
}

export const AboutCard = ({ title, img, description, text }: Props) => {
  return (
    <div
      className={`w-full flex flex-col ${
        text === 'right' ? 'items-end' : 'items-start'
      }`}
    >
      <div
        className={`${styles.cricle_bg} ${styles.cricle_border} flex justify-center items-center w-[100px] h-[100px] rounded-full`}
      >
        <img src={img} alt={title} />
      </div>
      <h1
        className={`text-white mt-[50px] mb-[16px] text-2xl font-bold leading-[33.6px] ${
          text === 'left' ? 'text-left' : 'text-right'
        }`}
      >
        {title}
      </h1>
      <p className='text-[#EBEDF0] text-sm font-normal leading-[22.4px] text-left'>
        {description}
      </p>
    </div>
  )
}
