import { useBlue, useGreen, useRed } from '@/atoms/color'
import { styled } from '@stitches/react'
import { Box } from './Box'
import { Stack } from './Stack'

const Code = styled('code', {
  display: 'inline',
  color: '$blue',
  fontFamily: `'Roboto Mono'`,
  fontWeight: 'bold',
  position: 'relative',
  fontSize: '1rem',
  transition: 'all 200ms ease-in-out',
  '&::before': {
    content: '""',
    position: 'absolute',
    background: '$blue',
    transition: 'all 200ms ease-in-out',
    top: 0,
    bottom: 0,
    right: 0,
    left: '100%',
    zIndex: -1,
  },
  '&:hover&::before': {
    left: 0,
  },
  '&:hover': {
    color: '$background',
  },
})

const rgbToHsl = (r: number, g: number, b: number) => {
  r = r / 255
  g = g / 255
  b = b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  let h = 0
  const l = (max + min) / 2
  const s = diff / (1 - Math.abs(max + min - 1))

  switch (min) {
    case max:
      h = 0
      break

    case r:
      h = 60 * ((b - g) / diff) + 180
      break

    case g:
      h = 60 * ((r - b) / diff) + 300
      break

    case b:
      h = 60 * ((g - r) / diff) + 60
      break
  }

  return [h, s, l] as const
}

/**
 * ColorDetails props.
 */
export type ColorDetailsProps = {}

/**
 * ColorDetails component.
 */
export const ColorDetails: React.VFC<ColorDetailsProps> = (props) => {
  const [r] = useRed()
  const [g] = useGreen()
  const [b] = useBlue()

  const [h, s, l] = rgbToHsl(r, g, b)

  return (
    <Box>
      <Stack spacing={2} direction="column">
        <Box css={{ textAlign: 'right' }}>
          <Code>
            #{r.toString(16).padStart(2, '0')}
            {g.toString(16).padStart(2, '0')}
            {b.toString(16).padStart(2, '0')}
          </Code>
        </Box>
        <Box css={{ textAlign: 'right' }}>
          <Code>
            hsl({h.toFixed(0)}°, {(s * 100).toFixed(0)}%, {(l * 100).toFixed(0)}
            %)
          </Code>
        </Box>
        <Box css={{ textAlign: 'right' }}>
          <Code>
            rgb({r}, {g}, {b})
          </Code>
        </Box>
      </Stack>
    </Box>
  )
}
