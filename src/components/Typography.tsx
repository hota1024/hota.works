import { styled } from '@stitches/react'

export const Typography = styled('h1', {
  variants: {
    variant: {
      h1: {
        fontSize: '4rem',
      },
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})
