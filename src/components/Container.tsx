import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    fillHeight: {
      true: {
        height: '100vh',
      },
    },
  },
})
