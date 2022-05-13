import { styled } from '@/stitches.config'

export const Slider = styled('input', {
  width: 8,
  height: 200,
  '-webkit-appearance': 'none',
  appearance: 'none',
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
    // background: '$blue',
    // width: 16,
    // height: 16,
    // borderRadius: '50%',
    // boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.15)',
    border: 'none',
  },
  variants: {
    direction: {
      vertical: {
        padding: 0,
        writingMode: 'bt-lr',
        '-webkit-appearance': 'slider-vertical',
      },
    },
  },
})
