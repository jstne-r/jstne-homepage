import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    // AspectRatio
  } from '@chakra-ui/react'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Pubmats">
      <Container>
        <Title>
          Pubmats   <Badge>Collections</Badge>
        </Title>
        <P>
         A collection of posters, promotional materials and other presentations for various events and campaigns that I&apos;ve made.
        </P>
        <List ml={4} my={4}>
          <ListItem>
              <Meta>Platform</Meta>
              <span>Windows, Adobe Photoshop, Canva, Figma </span>
          </ListItem>
        </List>
        
        <Link href="/images/works/Craftys Brand Kit Full.png" isExternal>
            <WorkImage src="/images/works/Craftys Brand Kit Full.png" alt="Craftys Brand Kit" title="Craftyz Brand Kit"/> 
        </Link>

        <Link href="/images/works/Coffee Crafts 2.png" isExternal>
            <WorkImage src="/images/works/Coffee Crafts 2.png" alt="Coffee Crafts 2" />
        </Link>

        <Link href="/images/works/Organization Poster - Pubmat.png" isExternal>
            <WorkImage src="/images/works/Organization Poster - Pubmat.png" alt="Organization Poster - Pubmat" />
        </Link>

        <Link href="/images/works/discrimination webinar post.png" isExternal>
            <WorkImage src="/images/works/discrimination webinar post.png" alt="Discrimination Webinar Post" />
        </Link>

        <Link href="/images/works/sogie bill informative posts.png" isExternal>
            <WorkImage src="/images/works/sogie bill informative posts.png" alt="Sogie Bill Informative Posts" />
        </Link>

        <Link href="/images/works/Savings Poster - Pubmat.png" isExternal>
            <WorkImage src="/images/works/Savings Poster - Pubmat.png" alt="Savings Poster - Pubmat" />
        </Link>
  
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
  