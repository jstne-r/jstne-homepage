import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    // AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Number Puzzle">
      <Container>
        <Title>
          Number Puzzle <Badge>2023</Badge>
        </Title>
        <P>
            Number Puzzle is a collaborative project that aims to create a
            visually appealing and user-friendly number puzzle game. The project
            focuses on a the puzzle game that challenges players to arrange numbered tiles in a specific order.
            The game is designed to be engaging and accessible, with a clean and modern interface.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.behance.net/gallery/174253071/Mobile-Game-(UI)">
            https://www.behance.net/Mobile-Game-UI <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
  
        <WorkImage src="/images/works/numberpuzzle_1.png" alt="Number Puzzle" />
        <WorkImage src="/images/works/numberpuzzle_2.png" alt="Number Puzzle" />
        <WorkImage src="/images/works/numberpuzzle_3.png" alt="Number Puzzle" />
        <WorkImage src="/images/works/numberpuzzle_4.png" alt="Number Puzzle" />


        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  