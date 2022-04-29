import { styled } from '@stitches/react'

export const Typography = styled('h1', {
  variants: {
    variant: {
      h1: {
        fontSize: '4rem',
      },
    },
    fontWeight: {
      regular: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
  },
  defaultVariants: {
    variant: 'h1',
    fontWeight: 'regular',
  },
})
