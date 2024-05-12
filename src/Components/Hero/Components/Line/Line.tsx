interface Props {
  className?: string
}

export const Line = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2'
      height='833'
      viewBox='0 0 2 833'
      fill='none'
      className={className}
    >
      <path
        opacity='0.3'
        d='M1 1L1.00003 832'
        stroke='url(#paint0_linear_14_30)'
        stroke-linecap='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_14_30'
          x1='0.500031'
          y1='13.5187'
          x2='0.510708'
          y2='832'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#61B7F0' stop-opacity='0' />
          <stop offset='0.108823' stop-color='#61B7F0' />
          <stop offset='0.46818' stop-color='#61B7F0' />
          <stop offset='0.526317' stop-color='#61B7F0' stop-opacity='0' />
          <stop offset='0.594143' stop-color='#FCF406' stop-opacity='0' />
          <stop offset='0.652281' stop-color='#FCF406' />
          <stop offset='1' stop-color='#FCF406' />
        </linearGradient>
      </defs>
    </svg>
  )
}
