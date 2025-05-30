import { Box,Flex,Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo } from '../../assets/contants';
export const Sidebar = () => {
  return (
    <Box 
    height={'100vh'} 
    border={'1px solid'} 
    py={8} 
    position={'sticky'} 
    top={0} left={0} px={{base:2,md:4}}>
        <Flex direction={'column'} w={"full"} gap={10} height={'full'} >
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:'block'}} cursor='pointer' >
                <InstagramLogo />
            </Link>
            <Link to={"/"} as={RouterLink} p={2} display={{base:"block",md:'none'}} borderRadius={6} 
            _hover={{bg:"whiteAlpha.200"}} w={10} cursor='pointer' >
                <InstagramMobileLogo />
            </Link>
            
        </Flex>
        
    </Box>
  )
}
