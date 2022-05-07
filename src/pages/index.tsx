import { Box } from '@/components/Box'
import { Container } from '@/components/Container'
import { Rectangle } from '@/components/Rectangle'
import { SkewButton } from '@/components/SkewButton'
import { Stack } from '@/components/Stack'
import { Typography } from '@/components/Typography'
import { keyframes } from '@/stitches.config'
import { NextPage } from 'next'
import Head from 'next/head'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home - hota.works</title>
      </Head>
      <Container
        justify="center"
        align="center"
        fillHeight
        style={{ flexFlow: 'column' }}
      >
        <Typography css={{ marginBottom: '$2' }}>hota1024</Typography>
        <Stack direction="row" spacing={2}>
          <SkewButton>About</SkewButton>
          <SkewButton>Works</SkewButton>
          <SkewButton>Contact</SkewButton>
        </Stack>
        <Box
          position="absolute"
          css={{
            right: 64,
          }}
        >
          <Rectangle />
        </Box>
      </Container>
    </>
  )
}

export default HomePage
