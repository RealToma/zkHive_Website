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
      className={`w-full flex flex-col items-center ${
        text === 'right' ? 'lg:items-end' : 'lg:items-start '
      }`}
    >
      <div
        className={`${styles.cricle_bg} ${styles.cricle_border} flex justify-center items-center w-[100px] h-[100px] rounded-full`}
      >
        <img src={img} alt={title} />
      </div>
      <h1
        className={`text-white mt-[50px] mb-[16px] text-2xl font-bold leading-[33.6px] text-center ${
          text === 'left' ? 'lg:text-left' : 'lg:text-right'
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
