import { keyframes, styled } from '@/stitches.config'

const fuwafuwa = (from: string, to: string) =>
  keyframes({
    from: {
      transform: `translateY(${from})`,
    },
    '50%': {
      transform: `translateY(${to})`,
    },
    to: {
      transform: `translateY(${from})`,
    },
  })

const RectWrap = styled('div', {
  position: 'relative',
})

const RectSvg = styled('svg', {
  position: 'absolute',
  top: 0,
  right: 0,
})

const FilledRect = styled(RectSvg, {
  transform: 'translateY(24px)',
  animation: `${fuwafuwa('32px', '24px')} 3000ms infinite ease-in-out`,
})

const StrokedRect = styled(RectSvg, {
  transform: 'translateY(-24px)',
  animation: `${fuwafuwa('-32px', '-24px')} 3000ms infinite ease-in-out`,
})

export const Rectangle = () => {
  return (
    <>
      <RectWrap>
        <FilledRect
          width="294"
          height="146"
          viewBox="0 0 294 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.2949 2.66207C99.6741 2.24064 100.214 2 100.781 2H284.019C285.75 2 286.663 4.05089 285.505 5.33793L193.705 107.338C193.326 107.759 192.786 108 192.219 108H8.98145C7.24991 108 6.33652 105.949 7.49486 104.662L99.2949 2.66207Z"
            fill="#212AFF"
            strokeWidth="4"
            opacity="0.3"
          />
        </FilledRect>
        <StrokedRect
          width="294"
          height="146"
          viewBox="0 0 294 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.2949 2.66207C99.6741 2.24064 100.214 2 100.781 2H284.019C285.75 2 286.663 4.05089 285.505 5.33793L193.705 107.338C193.326 107.759 192.786 108 192.219 108H8.98145C7.24991 108 6.33652 105.949 7.49486 104.662L99.2949 2.66207Z"
            stroke="#212AFF"
            strokeWidth="4"
          />
        </StrokedRect>
      </RectWrap>
    </>
  )
}
