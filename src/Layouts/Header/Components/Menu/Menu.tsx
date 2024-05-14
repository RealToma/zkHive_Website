import { useEffect } from 'react'
import { HEADER_LINKS } from '../../../../constants'
import { Horse } from '../../../../icons'
import styles from './Menu.module.css'
import { TwitterIcon } from '../../../../icons/Twitter'
import { Telegram2 } from '../../../../icons/Telgram2'
import { Medium } from '../../../../icons/Medium'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const SOCIAL_LINKS = [
  {
    icon: <TwitterIcon className='w-[30px] h-[30px]' />,
    link: 'https://x.com/zkhive',
  },
  {
    icon: <Telegram2 className='w-[30px] h-[30px]' />,
    link: 'https://t.me/zkhive_token',
  },
  {
    icon: <Medium className='w-[30px] h-[30px]' />,
    link: 'https://medium.com/@zkhive',
  },
]

export const Menu = ({ open, setOpen }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [open])

  return (
    <div
      className={`${styles.header_border_links_bg} ${
        open ? 'left-0' : '-left-full'
      } fixed flex justify-start  items-start pl-4 pt-[45px] top-0 min-h-screen w-full z-[99]`}
    >
      <ul className='flex flex-col gap-y-5'>
        {HEADER_LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              onClick={() => setOpen(false)}
              className='text-white text-2xl not-italic font-normal leading-[160%] hover:text-[#fbda00] transition-all duration-300'
            >
              {link.label}
            </a>
          </li>
        ))}
        <button
          className={`cursor-pointer ${styles.buy_token_button} px-[33px] py-[11px] flex items-center gap-x-2.5 text-black`}
        >
          <Horse /> Buy Token
        </button>
      </ul>
      <div className='w-[90%] absolute bottom-8 flex justify-between'>
        {SOCIAL_LINKS.map((icon, index) => (
          <button
            key={index}
            className={`w-[73px] h-[73px] text-black flex justify-center items-center z-[100] ${styles.social_button}`}
            onClick={() => window.open(icon.link)}
          >
            <span className={` p-[22px] ${styles.social_button} `}>
              {icon.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
