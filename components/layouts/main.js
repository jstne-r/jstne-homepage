import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justine's homepage" />
        <meta name="author" content="Justine Felicilda" />
        <meta name="author" content="jstne" />
        <link rel="paw2-icon" href="paw2-icon.png" />
        <link rel="shortcut icon" href="/faviconpaw.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Justine Felicilda" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="jstne" />
        <meta name="twitter:creator" content="jstne" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="Justine Felicilda" />
        <meta name="og:title" content="Justine Felicilda" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <title>Justine Felicilda - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
