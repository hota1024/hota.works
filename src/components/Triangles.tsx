import { keyframes, styled } from '@/stitches.config'
import { Box } from './Box'
import { Stack } from './Stack'

const move = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(64px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const Triangle = styled(
  () => (
    <svg
      width="50"
      height="34"
      viewBox="0 0 50 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Box
        as="path"
        d="M26.5664 30.8101C25.7657 31.8188 24.2343 31.8188 23.4336 30.8101L3.13736 5.24352C2.09683 3.9328 3.03027 2 4.70377 2L45.2962 2C46.9697 2 47.9032 3.93279 46.8626 5.24351L26.5664 30.8101Z"
        css={{ stroke: '$blue' }}
        strokeWidth="4"
      />
    </svg>
  ),
  {
    display: 'block',
  }
)

/**
 * Triangles props.
 */
export type TrianglesProps = {}

/**
 * Triangles component.
 */
export const Triangles: React.VFC<TrianglesProps> = (props) => {
  return (
    <Stack spacing={4} direction="column">
      <Triangle />
      <Triangle />
      <Triangle />
    </Stack>
  )
}
