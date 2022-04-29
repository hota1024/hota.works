import { styled } from '@/stitches.config'

export const Stack = styled('div', {
  display: 'flex',
  '& > *': {
    margin: 0,
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        '& > *': {
          marginTop: 0,
        },
      },
      column: {
        flexDirection: 'column',
        marginLeft: 0,
      },
    },
    spacing: {
      0: {
        '& > *': {
          marginLeft: 0,
          marginTop: 0,
        },
      },
      1: {
        '& > *': {
          marginLeft: '$1',
          marginTop: '$1',
        },
      },
      2: {
        '& > *': {
          marginLeft: '$2',
          marginTop: '$2',
        },
      },
      3: {
        '& > *': {
          marginLeft: '$3',
          marginTop: '$3',
        },
      },
      4: {
        '& > *': {
          marginLeft: '$4',
          marginTop: '$4',
        },
      },
      5: {
        '& > *': {
          marginLeft: '$5',
          marginTop: '$5',
        },
      },
      6: {
        '& > *': {
          marginLeft: '$6',
          marginTop: '$6',
        },
      },
    },
  },
  defaultVariants: {
    direction: 'column',
  },
})
