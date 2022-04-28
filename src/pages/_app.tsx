import { globalCss } from '@/stitches.config'
import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundImage: 'radial-gradient($dotGray 1px, transparent 0)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-32px -32px',
    fontFamily: `'Roboto Mono', 'Noto Sans JP', sans-serif`,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
