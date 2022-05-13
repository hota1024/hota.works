import { useFlipped } from '@/atoms/color'
import { keyframes, styled } from '@/stitches.config'
import { useState } from 'react'

const fuwafuwa = (from: string, to: string) =>
  keyframes({
    from: {
      transform: `translateY(${from}) skewX(-30deg)`,
    },
    '50%': {
      transform: `translateY(${to}) skewX(-30deg)`,
    },
    to: {
      transform: `translateY(${from}) skewX(-30deg)`,
    },
  })

const RectWrap = styled('div', {
  position: 'relative',
})

const RectSvg = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 200,
  height: 120,
  borderRadius: 4,
  transition: 'all 100ms ease-in-out',
  cursor: 'pointer',
})

const FilledRect = styled(RectSvg, {
  transform: 'translateY(24px)',
  animation: `${fuwafuwa('32px', '24px')} 3000ms infinite ease-in-out`,
  background: '$blueAlpha',
  variants: {
    flipped: {
      true: {
        background: '$blue',
        animation: `${fuwafuwa('-32px', '-24px')} 3000ms infinite ease-in-out`,
      },
    },
  },
})

const StrokedRect = styled(RectSvg, {
  transform: 'translateY(-24px)',
  animation: `${fuwafuwa('-32px', '-24px')} 3000ms infinite ease-in-out`,
  border: '4px solid $blue',
  variants: {
    flipped: {
      true: {
        border: '4px solid $blueAlpha',
        animation: `${fuwafuwa('32px', '24px')} 3000ms infinite ease-in-out`,
      },
    },
  },
})

export const Rectangle = () => {
  // const [flipped, setFlipped] = useState(false)
  const [flipped, setFlipped] = useFlipped()

  return (
    <>
      <RectWrap onClick={() => setFlipped(() => (flipped === 0 ? 1 : 0))}>
        <FilledRect flipped={!!flipped}></FilledRect>
        <StrokedRect flipped={!!flipped}></StrokedRect>
      </RectWrap>
    </>
  )
}
