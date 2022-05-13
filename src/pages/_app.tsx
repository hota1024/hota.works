import {
  useRed,
  useGreen,
  useBlue,
  useBgRed,
  useBgGreen,
  useBgBlue,
  useFlipped,
} from '@/atoms/color'
import { Box } from '@/components/Box'
import { Cursor } from '@/components/Cursor'
import { createTheme, globalCss } from '@/stitches.config'
import { styled } from '@stitches/react'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: `'Roboto Mono', 'Noto Sans JP', sans-serif`,
    color: '$text',
  },
})

export const Background = styled('div', {
  position: 'fixed',
  zIndex: -1,
  width: '100%',
  height: '100%',
  background: '$background',
  backgroundImage: 'radial-gradient($blueAlpha 1px, transparent 0)',
  backgroundSize: '32px 32px',
  backgroundPosition: '-32px -32px',
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  const [r] = useRed()
  const [g] = useGreen()
  const [b] = useBlue()

  const [bgR] = useBgRed()
  const [bgG] = useBgGreen()
  const [bgB] = useBgBlue()

  const [flipped] = useFlipped()

  const [theme, setTheme] = useState<ReturnType<typeof createTheme>>()

  useEffect(() => {
    let theme

    theme = createTheme({
      colors: {
        blue: `rgb(${r}, ${g}, ${b})`,
        blueAlpha: `rgba(${r}, ${g}, ${b}, 0.4)`,
        background: `rgb(${bgR}, ${bgG}, ${bgB})`,
      },
    })

    setTheme(theme)
  }, [r, g, b, bgR, bgG, bgB, flipped])

  return (
    <Box className={theme}>
      <Background />
      <Component {...pageProps} />
      <Cursor />
    </Box>
  )
}

export default MyApp
