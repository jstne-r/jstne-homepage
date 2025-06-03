import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      🖼️🐶 by: Takuya Matsuyama.
      <br />
      &copy; {new Date().getFullYear()}.  All Rights Reserved.
    </Box>
  )
}

export default Footer
