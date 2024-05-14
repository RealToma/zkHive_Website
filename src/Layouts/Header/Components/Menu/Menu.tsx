import { useEffect } from 'react'
import { HEADER_LINKS } from '../../../../constants'
import { Horse } from '../../../../icons'
import styles from './Menu.module.css'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

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
    </div>
  )
}
