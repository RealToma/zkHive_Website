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
              {ComparisonData.map((data, index) => (
                <tr key={index}>
                  <td className='w-[200px] lg:w-[500px] pl-6 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px] text-left text-white py-10 px-2 lg:px-[35px]'>
                    {data.title}
                  </td>

                  <td
                    className={`${styles.table_NA} py-10 text-white text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left`}
                  >
                    {data.noProtection}
                  </td>
                  <td
                    className={`${styles.table_NA} py-10 text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left  `}
                  >
                    {data.existingProtection} dasdsa
                  </td>
                  <td className='py-10 text-[#20F535] text-xs lg:text-2xl font-bold leading-[16px] lg:leading-[38.4px]  text-left'>
                    {data.zkHiveProtection}
                  </td>
                </tr>
              ))}
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
