import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      background: '#ffffff',
      gray: '#d0d0d0',
      dotGray: '$gray',
      text: '#101010',
      blue: 'rgb(33, 42, 255)',
      blueAlpha: 'rgba(33, 42, 255, 0.4)',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
  },
})
