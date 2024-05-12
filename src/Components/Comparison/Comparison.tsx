import styles from './Comparison.module.css'
export const Comparison = () => {
  return (
    <div>
      <div id='comparison' className='container px-5 lg:px-0'>
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
                <td className='w-[200px] lg:w-[500px] py-10 px-0 lg:px-[35px]'></td>
                <td className='py-10  text-xs lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  No Protection
                </td>
                <td className='py-10  text-xs lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  Existing Protection
                </td>
                <td className='py-10  text-xs lg:text-2xl text-white font-medium leading-[16px] lg:leading-[38.4px] text-left'>
                  zkHive Protection
                </td>
              </tr>
              <tr>
                <td className='w-[200px] lg:w-[500px] pl-6 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px] text-left text-white py-10 px-2 lg:px-[35px]'>
                  File scanning and analysis
                </td>
                <td
                  className={` ${styles.table_NA} py-10 text-white text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left`}
                >
                  N/A
                </td>
                <td
                  className={`${styles.table_NA} py-10 text-white text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left`}
                >
                  N/A
                </td>
                <td className='py-10 text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left'>
                  Advanced
                </td>
              </tr>
              <tr>
                <td className='w-[200px] lg:w-[500px] pl-2 lg:pl-6 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left text-white py-10 px-[35px]'>
                  File scanning and analysis
                </td>
                <td
                  className={`${styles.table_NA} text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  N/A
                </td>
                <td
                  className={` text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  Basic
                </td>
                <td
                  className={`text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  Advanced
                </td>
              </tr>
              <tr>
                <td className='w-[200px] lg:w-[500px] pl-2 lg:pl-6 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left text-white py-10 px-[35px]'>
                  File scanning and analysis
                </td>
                <td
                  className={`${styles.table_NA} text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  N/A
                </td>
                <td
                  className={`${styles.table_NA} text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  N/A
                </td>
                <td
                  className={`text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  Advanced
                </td>
              </tr>
              <tr>
                <td className=' w-[200px] lg:w-[500px] pl-2 lg:pl-6 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left text-white py-10 px-[35px]'>
                  File scanning and analysis
                </td>
                <td
                  className={`${styles.table_NA} text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  N/A
                </td>
                <td
                  className={`${styles.table_NA} text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  N/A
                </td>
                <td
                  className={` text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left py-10`}
                >
                  Advanced
                </td>
              </tr>
            </table>
            <img
              src='/img/table-new.png'
              className='w-full absolute h-full hidden lg:block top-0 left-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
