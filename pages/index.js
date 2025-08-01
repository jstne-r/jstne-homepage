import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoBehance,  IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Creator based in Manila!
      </Box>

      {/* <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Justine Felicilda
          </Heading>
          <p>Creator ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/justine.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box> */}

      <Box
        display="flex"
        flexDirection={{ base: 'column-reverse', md: 'row'}}
      >
        <Box flexGrow={1}>
          <Heading as= "h2" variant="page-title">
            Justine Felicilda
          </Heading>
          <p>Cretor ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0}}
          ml={{ md:6}}
          textAlign="center"
        >
          <Box 
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/justine.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          {/* Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers. */}
          Justine is a multimedia creator based in Manila, Philippines. 
          She’s passionate about blending art and technology—whether that’s 
          building digital products, designing user interfaces, or crafting 
          engaging user experiences. Her work combines development, UI/UX design, 
          and visual storytelling to bring fresh, compelling ideas to life. With a 
          strong eye for detail and a user-centered approach, she designs intuitive, 
          aesthetically-driven experiences that connect with people. Outside of web 
          and digital design, she’s also into film and photography, and loves capturing 
          and editing visual stories that add another layer to her creative work.

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="yellow"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <BioSection>
          <BioYear>2024 - Present</BioYear>
           IT Specialist | Omni Channel Solutions
        </BioSection>
        <BioSection>
          <BioYear>2023 - 2024</BioYear>
            Multimedia Google Volunteer | GDSC PLM
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          IT Intern | Omni Channel Solutions
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as a freelancer | Web Design, Photo & Video Editing
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          {/* <Link href="https://illust.odoruinu.net/" target="_blank"> */}
            Drawing
          {/* </Link> */}
          , Playing Guitar,{' '}
          {/* <Link href="https://500px.com/p/craftzdog" target="_blank"> */}
            Photography
          {/* </Link> */}
          , Visual Graphics, Animation, Film, UI/UX, Front-end Development
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jstne-r" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @jstne-r
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://behance.net/jstne-r" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoBehance />}
              >
                @jstne-r
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://instagram.com/dnpilms" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @dnpilms
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Heading as="h3" variant="section-title">
          CV/Resume
        </Heading>
        <p>
          Explore my professional journey, skills, and experiences in detail.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://drive.google.com/file/d/1qrIttipuLjZpTCu6Yc6DKaCz3oYQiZMC/view?usp=sharing"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="yellow"
          >
            Click Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
