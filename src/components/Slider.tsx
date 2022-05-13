import { styled } from '@/stitches.config'

export const Slider = styled('input', {
  width: 200,
  height: 8,
  cursor: 'pointer',
  outline: 'none',
  background: '$blueAlpha',
  borderRadius: 10,

  '&::-webkit-slider-thumb': {
    '-webkit-appearance': 'none',
    background: '$blue',
    width: 16,
    height: 16,
    borderRadius: '50%',
    boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.15)',
  },
  '&::-moz-range-thumb': {
    background: '$blue',
    width: 16,
    height: 16,
    borderRadius: '50%',
    boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.15)',
    border: 'none',
  },
})
