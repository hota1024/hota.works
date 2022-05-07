import { keyframes, styled } from '@/stitches.config'

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
})

const FilledRect = styled(RectSvg, {
  transform: 'translateY(24px)',
  animation: `${fuwafuwa('32px', '24px')} 3000ms infinite ease-in-out`,
  background: '$blue',
  opacity: 0.2,
})

const StrokedRect = styled(RectSvg, {
  transform: 'translateY(-24px)',
  animation: `${fuwafuwa('-32px', '-24px')} 3000ms infinite ease-in-out`,
  border: '4px solid $blue',
})

export const Rectangle = () => {
  return (
    <>
      <RectWrap>
        <FilledRect></FilledRect>
        <StrokedRect></StrokedRect>
      </RectWrap>
    </>
  )
}
