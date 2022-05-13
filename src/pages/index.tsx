import { useBlue, useGreen, useRed } from '@/atoms/color'
import { Box } from '@/components/Box'
import { ColorDetails } from '@/components/ColorDetails'
import { Container } from '@/components/Container'
import { DotRectangle } from '@/components/DotRectangle'
import { Rectangle } from '@/components/Rectangle'
import { SkewButton } from '@/components/SkewButton'
import { Slider } from '@/components/Slider'
import { Stack } from '@/components/Stack'
import { Typography } from '@/components/Typography'
import { createTheme, keyframes } from '@/stitches.config'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  const [r, setRed] = useRed()
  const [g, setGreen] = useGreen()
  const [b, setBlue] = useBlue()

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
        <Typography css={{ marginBottom: '$2', color: '$blue' }}>
          hota1024
        </Typography>
        <Stack direction="row" spacing={2}>
          <SkewButton>About</SkewButton>
          <SkewButton>Works</SkewButton>
          <SkewButton>Contact</SkewButton>
        </Stack>
        <Box
          position="absolute"
          css={{
            top: 32,
            left: 32,
          }}
        >
          <DotRectangle />
        </Box>
        <Box
          position="absolute"
          css={{
            top: 32,
            right: 32,
          }}
        >
          <DotRectangle css={{ borderRadius: '50%' }} />
        </Box>
        <Box
          position="absolute"
          css={{
            right: 96,
          }}
        >
          <Rectangle />
        </Box>
        <Box
          position="absolute"
          css={{
            left: 32,
            bottom: 32,
          }}
        >
          <Stack spacing={2} direction="column" css={{ width: 256 }}>
            <div>
              <Slider
                type="range"
                min={0}
                max={255}
                value={r}
                onChange={(e) => setRed(e.target.valueAsNumber)}
              />
            </div>
            <div>
              <Slider
                type="range"
                min={0}
                max={255}
                value={g}
                onChange={(e) => setGreen(e.target.valueAsNumber)}
              />
            </div>
            <div>
              <Slider
                type="range"
                min={0}
                max={255}
                value={b}
                onChange={(e) => setBlue(e.target.valueAsNumber)}
              />
            </div>
          </Stack>
        </Box>
        <Box
          position="absolute"
          css={{
            right: 32,
            bottom: 32,
          }}
        >
          <ColorDetails />
        </Box>
      </Container>
    </>
  )
}

export default HomePage
