import { useState } from 'react'
import { HEADER_LINKS } from '../../constants'
import { Horse } from '../../icons'
import { Menu } from './Components'
import styles from './Header.module.css'
export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='w-full'>
      <div className='w-full pt-[37px] container px-5 lg:px-0 flex  items-center justify-between'>
        <a href='#home'>
          <img src='/img/ZK-logo_menu.png' />
        </a>
        <ul className=' hidden py-[30px] gap-x-[50px] header_border_links_bg header_border_links lg:flex border border-solid px-[53px] rounded-[50px]'>
          {HEADER_LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className='text-base cursor-pointer font-normal text-white leading-[25.6px] hover:text-[#fbda00] transition-all duration-300'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={'btn'}>
          <button
            className={`cursor-pointer hidden lg:flex items-center ${styles.buy_token_button} px-[33px] py-[11px] flex items-center gap-x-2.5 text-black`}
            onClick={() =>
              window.open(
                'https://app.uniswap.org/swap?outputCurrency=0x750c3a0a0ce9984eeb8c5d146dff024b584e5e33&use=V2'
              )
            }
          >
            <Horse /> Buy Token
          </button>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className={` block  z-[100] lg:hidden ${styles.nav_icon} ${
            open ? styles.open : ''
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </header>
  )
}
