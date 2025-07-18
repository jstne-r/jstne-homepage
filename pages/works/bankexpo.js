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
    <Layout title="Bank Expo">
      <Container>
        <Title>
          Bank Expo <Badge>2022</Badge>
        </Title>
        <P>
            Bank Expo is a UI design project that focuses on creating a modern and user-friendly 
            interface for a banking application. The project aims to enhance the user
            experience by providing a clean and intuitive design, making it easy for users to 
            navigate through various banking services and features.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.behance.net/gallery/174247765/Online-Bank-System-(UI)">
            https://www.behance.net/Bank-System-UI <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/MacOS</span>
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
        <WorkImage src="/images/works/ui-ux - BankExpo.png" alt="Bank Expo UI/UX" />
        <WorkImage src="/images/works/bankexpo_1.png" alt="Bank Expo 1" />
        <WorkImage src="/images/works/bankexpo_2.png" alt="Bank Expo 2" />
        <WorkImage src="/images/works/bankexpo_3.png" alt="Bank Expo 3" />
        <WorkImage src="/images/works/bankexpo_4.png" alt="Bank Expo 4" />

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
  