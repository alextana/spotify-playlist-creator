import React from 'react'
import { animated, useSpring } from 'react-spring'

export default function Travel({ isSelected }: { isSelected?: boolean }) {
  const styles = useSpring({
    x: isSelected ? 10 : 0,
    y: isSelected ? -10 : 0,
  })

  return (
    <animated.svg
      style={styles}
      className='w-16 mx-auto h-16'
      id='emoji'
      viewBox='0 0 72 72'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='color'>
        <polyline
          fill='#9b9b9a'
          stroke='none'
          points='24,39.7539 8.1194,34.5078 3.6819,35.8828 14.0221,45.2348'
        />
        <path
          fill='#d0cfce'
          stroke='none'
          d='M42.5887,30.7725l13.6352-4.637c0,0,13.4999-0.2289,10.3294,3.2551 c-3.1706,3.484-25.4249,12.196-32.0018,14.6509c-6.5769,2.455-14.7118,3.7502-20.337,3.8592 c-4.9236,0.0953,0.5896-2.8912,0.5896-2.8912s6.2557-3.55,9.0249-4.7568l2.6347-1.9489'
        />
        <polyline
          fill='#9b9b9a'
          stroke='none'
          points='47.0508,35.4288 22.4454,32.6408 20.3515,34.1342 37.7611,40.3461'
        />
      </g>
      <g id='hair' />
      <g id='skin' />
      <g id='skin-shadow' />
      <g id='line'>
        <polyline
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5597'
          points='19.9738,39.1394 7.5418,34.7361 4.4746,35.8087 12.6436,43.1314'
        />
        <polyline
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5597'
          points='47.0508,34.6931 22.4454,32.6408 20.3515,34.1342 37.1065,40.1126'
        />
        <path
          fill='none'
          stroke='#000000'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5597'
          d='M43.174,31.3231l11.1493-4.4864c1.3266-0.5338,2.7434-0.7839,4.1727-0.74c3.6995,0.1136,10.3898,0.6672,8.0573,3.2304 c-3.1706,3.4839-25.4249,12.196-32.0018,14.6509s-14.7118,3.7502-20.337,3.8591c-4.9236,0.0953,0.5896-2.8912,0.5896-2.8912 s6.2557-3.55,9.0249-4.7568l2.7841-1.2132'
        />
      </g>
    </animated.svg>
  )
}
