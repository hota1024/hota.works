import { keyframes, styled } from '@/stitches.config'

const dotMove = keyframes({
  from: {
    backgroundPositionX: '32px',
    backgroundPositionY: '-32px',
  },
  to: {
    backgroundPositionX: '-32px',
    backgroundPositionY: '32px',
  },
})

export const DotRectangle = styled('div', {
  width: 256,
  height: 256,
  backgroundImage: 'radial-gradient($blue 2px, transparent 0)',
  backgroundSize: '16px 16px',
  backgroundPosition: '0px 0px',
  fontFamily: `'Roboto Mono', 'Noto Sans JP', sans-serif`,
  color: '$text',
  animation: `${dotMove} 10000ms infinite linear`,
})
