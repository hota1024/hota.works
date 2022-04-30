import { keyframes, styled } from '@/stitches.config'
import { useEffect, useState } from 'react'

const cursorSize = (size: number) => ({
  width: size,
  height: size,
  top: -size / 2,
  left: -size / 2,
})

const CursorPointer = styled('div', {
  position: 'fixed',
  transform: 'translate(0, 0)',
  pointerEvents: 'none',
  borderRadius: '50%',
  zIndex: 999,
  transition:
    'width 300ms ease-in-out, height 300ms ease-in-out, left 300ms ease-in-out, top 300ms ease-in-out',
})

const CenterPointer = styled(CursorPointer, {
  background: '$blue',
  ...cursorSize(12),
  variants: {
    hover: {
      true: {
        ...cursorSize(48),
        background: 'transparent',
        border: '2px solid white',
      },
    },
  },
})

const CursorAnimation = keyframes({
  from: {
    ...cursorSize(32),
  },
  '50%': {
    ...cursorSize(48),
  },
  to: {
    ...cursorSize(32),
  },
})

const DelayPointer = styled(CursorPointer, {
  background: '$blue',
  opacity: 0.3,
  width: 32,
  height: 32,
  top: -16,
  left: -16,
  variants: {
    hover: {
      true: {
        ...cursorSize(0),
      },
      false: {
        animation: `${CursorAnimation} 2000ms infinite ease-in-out`,
      },
    },
  },
})

/**
 * Cursor props.
 */
export type CursorProps = {}

/**
 * Cursor component.
 */
export const Cursor: React.VFC<CursorProps> = (props) => {
  const [center, setCenter] = useState<[number, number]>([0, 0])
  const [pos, setPos] = useState<[number, number]>([0, 0])
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCenter([e.clientX, e.clientY])
    }

    const onMouseOver = (e: MouseEvent) => {
      setHover(false)

      if (e.target instanceof HTMLButtonElement) {
        setHover(true)
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  useEffect(() => {
    let isEnd = false

    const onFrame = () => {
      if (isEnd) {
        return
      }

      const [cx, cy] = center
      const v = 10

      setPos(([px, py]) => [px - (px - cx) / v, py - (py - cy) / v])
      requestAnimationFrame(onFrame)
    }
    onFrame()

    return () => {
      isEnd = true
    }
  }, [center])

  return (
    <>
      <DelayPointer
        style={{ transform: `translate(${pos[0]}px, ${pos[1]}px)` }}
        hover={hover}
      />
      <CenterPointer
        style={{
          transform: `translate(${center[0]}px, ${center[1]}px)`,
        }}
        hover={hover}
      />
    </>
  )
}
