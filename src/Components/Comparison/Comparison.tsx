import { useEffect, useRef } from 'react'
import styles from './Comparison.module.css'

const ComparisonData = [
  {
    title: 'File scanning and analysis',
    noProtection: 'N/A',
    existingProtection: 'N/A',
    zkHiveProtection: 'Advanced',
  },
  {
    title: 'Realtime monitoring and protection',
    noProtection: 'N/A',
    existingProtection: 'Basic',
    zkHiveProtection: 'Advanced',
  },
  {
    title: 'Intrusion detection and prevention',
    noProtection: 'N/A',
    existingProtection: 'N/A',
    zkHiveProtection: 'Advanced',
  },
  {
    title: 'Analomy detection',
    noProtection: 'N/A',
    existingProtection: 'Basic',
    zkHiveProtection: 'Advanced',
  },
  {
    title: 'Links authenticity validator',
    noProtection: 'N/A',
    existingProtection: 'N/A',
    zkHiveProtection: 'Advanced',
  },
  {
    title: 'User reputation score',
    noProtection: 'N/A',
    existingProtection: 'N/A',
    zkHiveProtection: 'Advanced',
  },
]

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Comparison = () => {
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
    <div>
      <div ref={ref} id='comparison' className='container px-5 lg:px-0'>
        <div
          className={`mt-[100px] lg:mt-[180px] pb-[2rem] relative h-auto  lg:min-h-auto ${styles.table_container}`}
        >
          <div className='flex justify-center'>
            <div>
              <h1 className=' text-[22px] lg:text-[49px] inline-block mt-[35px]  text-white text-center font-bold leading-[63.7px]'>
                Feature Comparison
              </h1>
              <div className={`${styles.line} mt-[31px]`} />
            </div>
          </div>
          <div className='w-full'>
            <table className={` ${styles.table} w-full overflow-x-auto`}>
              <tr>
                <td className='w-auto lg:w-[500px] py-2 lg:py-10 px-0 lg:px-[35px]'></td>
                <td className='py-2 lg:py-10  text-[7px] lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  No Protection
                </td>
                <td className='py-2 lg:py-10 text-[7px] lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  Existing Protection
                </td>
                <td className='py-2 lg:py-10 text-[7px] lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  zkHive Protection
                </td>
              </tr>
              {ComparisonData.map((data, index) => (
                <tr key={index}>
                  <td className='w-auto lg:w-[500px] pl-2 lg:pl-6 text-[8px] lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px] text-left text-white py-0 lg:py-10 px-2 lg:px-[35px]'>
                    {data.title}
                  </td>

                  <td
                    className={`${styles.table_NA}  py-0  lg:py-10 text-white text-[8px] lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left`}
                  >
                    {data.noProtection}
                  </td>
                  <td
                    className={`${styles.table_NA}  py-2  lg:py-10 text-[8px] lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left  `}
                  >
                    {data.existingProtection}
                  </td>
                  <td className=' py-2  text-[#20F535] text-[8px] lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left'>
                    {data.zkHiveProtection}
                  </td>
                </tr>
              ))}
            </table>
            <img
              src='/img/table-new.png'
              className='w-full absolute h-full hidden lg:block top-0 left-0 z-[-1]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
