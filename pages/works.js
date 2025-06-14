import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import thumbcomingSoon from '../public/images/works/comingsoon_eyecatch.png'
import thumbOmart from '../public/images/works/omart_eyecatch.png'
import thumbNumberPuzzle from '../public/images/works/numberpuzzle_eyecatch.png'  
import thumbBankExpo from '../public/images/works/bankexpo_eyecatch.png'
import thumbBossYoks from '../public/images/works/bossyoks_eyecatch.png'
import thumbOrganikoLokal from '../public/images/works/organikolokal_eyecatch.png'
import thumbGameTheory from '../public/images/works/gametheory_eyecatch.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}

        <Section delay={0.1}>
          <WorkGridItem id="bankexpo" thumbnail={thumbBankExpo} title="Bank Expo">
            A mobile UI that serves as a digital platform for a bank application.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="bossyoks" thumbnail={thumbBossYoks} title="Boss Yoks">
            A website that promotes a newly owned unlimited wings restaurant in Manila. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="organikolokal" thumbnail={thumbOrganikoLokal} title="Organiko Lokal">
            An e-commerce web project that aims to promote local organic products and
            sustainable farming practices.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="gametheory" thumbnail={thumbGameTheory} title="Game Theory Generator">
            A web application where users can input and generates an answers based 
            on a mathematical framework.
          </WorkGridItem>
        </Section>


      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}

        <Section delay={0.3}>
          <WorkGridItem id="omart" thumbnail={thumbOmart} title="O-mart">
            An exclusive store platform redesigned, improving user experience,
            visual design, and mobile responsiveness
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="numberpuzzle" thumbnail={thumbNumberPuzzle} title="Number Puzzle">
            A classic number puzzle game that that tinkers your logic mind.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="" thumbnail={thumbcomingSoon} title="">
            New works to be posted soon!
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
