import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      🖼️🐶 by:<a href='https://www.craftz.dog/'>Takuya Matsuyama.</a> 
      <br />
      &copy; {new Date().getFullYear()}.  All Rights Reserved.
    </Box>
  )
}

export default Footer
