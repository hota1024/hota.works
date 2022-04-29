import { styled } from '@/stitches.config'

export const Stack = styled('div', {
  display: 'flex',
  variants: {
    spacing: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
  compoundVariants: [
    {
      direction: 'row',
      spacing: 0,
      css: {
        ':not(:first-child)': {
          marginLeft: 0,
        },
      },
    },
    {
      direction: 'row',
      spacing: 1,
      css: {
        ':not(:first-child)': {
          marginLeft: '$1',
        },
      },
    },
    {
      direction: 'row',
      spacing: 2,
      css: {
        ':not(:first-child)': {
          marginLeft: '$2',
        },
      },
    },
    {
      direction: 'row',
      spacing: 3,
      css: {
        ':not(:first-child)': {
          marginLeft: 3,
        },
      },
    },
    {
      direction: 'row',
      spacing: 4,
      css: {
        ':not(:first-child)': {
          marginLeft: 4,
        },
      },
    },
    {
      direction: 'row',
      spacing: 5,
      css: {
        ':not(:first-child)': {
          marginLeft: 5,
        },
      },
    },
    {
      direction: 'row',
      spacing: 6,
      css: {
        ':not(:first-child)': {
          marginLeft: 6,
        },
      },
    },
    {
      direction: 'column',
      spacing: 0,
      css: {
        ':not(:first-child)': {
          marginTop: 0,
        },
      },
    },
    {
      direction: 'column',
      spacing: 1,
      css: {
        ':not(:first-child)': {
          marginTop: 1,
        },
      },
    },
    {
      direction: 'column',
      spacing: 2,
      css: {
        ':not(:first-child)': {
          marginTop: 2,
        },
      },
    },
    {
      direction: 'column',
      spacing: 3,
      css: {
        ':not(:first-child)': {
          marginTop: 3,
        },
      },
    },
    {
      direction: 'column',
      spacing: 4,
      css: {
        ':not(:first-child)': {
          marginTop: 4,
        },
      },
    },
    {
      direction: 'column',
      spacing: 5,
      css: {
        ':not(:first-child)': {
          marginTop: 5,
        },
      },
    },
    {
      direction: 'column',
      spacing: 6,
      css: {
        ':not(:first-child)': {
          marginTop: 6,
        },
      },
    },
  ],
  defaultVariants: {
    direction: 'column',
  },
})
