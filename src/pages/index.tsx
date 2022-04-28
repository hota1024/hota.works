import { Container } from '@/components/Container'
import { SkewButton } from '@/components/SkewButton'
import { Typography } from '@/components/Typography'
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
        <Typography>hota1024</Typography>
        <Container justify="center">
          <SkewButton>About</SkewButton>
          <SkewButton>Works</SkewButton>
          <SkewButton>Contact</SkewButton>
        </Container>
      </Container>
    </>
  )
}

export default HomePage
