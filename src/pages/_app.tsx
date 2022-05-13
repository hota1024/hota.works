import { useRed, useGreen, useBlue } from '@/atoms/color'
import { Box } from '@/components/Box'
import { Cursor } from '@/components/Cursor'
import { createTheme, globalCss } from '@/stitches.config'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundImage: 'radial-gradient($dotGray 1px, transparent 0)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-32px -32px',
    fontFamily: `'Roboto Mono', 'Noto Sans JP', sans-serif`,
    color: '$text',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  const [r] = useRed()
  const [g] = useGreen()
  const [b] = useBlue()

  const [theme, setTheme] = useState<ReturnType<typeof createTheme>>()

  useEffect(() => {
    const theme = createTheme({
      colors: {
        blue: `rgb(${r}, ${g}, ${b})`,
        blueAlpha: `rgba(${r}, ${g}, ${b}, 0.4)`,
      },
    })

    setTheme(theme)
  }, [r, g, b])

  return (
    <Box className={theme}>
      <Component {...pageProps} />
      <Cursor />
    </Box>
  )
}

export default MyApp
