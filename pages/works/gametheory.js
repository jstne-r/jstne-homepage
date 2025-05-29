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
    <Layout title="Game Theory Generator">
      <Container>
        <Title>
          Game Theory Generator <Badge>2023</Badge>
        </Title>
        <P>
            Game Theoy Generator is a web application where users can input and generates an 
            answers based on a mathematical framework, allowing users to explore various game 
            theory concepts and strategies. The application is designed to be user-friendly 
            and accessible, with a clean and modern interface.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jstne-r.github.io/game-theory-strategy/">
            https://jstne-r.github.io/game-theory-strategy/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS</span>
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
  
        <WorkImage src="/images/works/gametheory_1.png" alt="Game Theory 1" />
        <WorkImage src="/images/works/gametheory_2.png" alt="Game Theory 2" />
        <WorkImage src="/images/works/gametheory_3.png" alt="Game Theory 3" />
        <WorkImage src="/images/works/gametheory_4.png" alt="Game Theory 4" />



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
  