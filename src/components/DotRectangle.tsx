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
  backgroundSize: '32px 32px',
  backgroundPosition: '0px 0px',
  fontFamily: `'Roboto Mono', 'Noto Sans JP', sans-serif`,
  color: '$text',
  animation: `${dotMove} 3000ms infinite linear`,
})
