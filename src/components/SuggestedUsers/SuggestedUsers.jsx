import { Box, Flex, Text, VStack,Link } from "@chakra-ui/react"
import { SuggestedHeader } from "./SuggestedHeader"
import { SuggestedUser } from "./SuggestedUser"
// import { Link } from "react-router-dom"

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'} >
            <Text fontSize={'14px'} fontWeight={'bold'} color={'gray.500'}>
                Suggested for you
            </Text>
            <Text fontSize={'12px'} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name='Dan Abrahmov' followers={1394} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name={'Ryan Florence'} followers={568} avatar={'https://bit.ly/ryan-florence'}/>
        <SuggestedUser name={'Christian Nwamba'} followers={785} avatar={'https://bit.ly/code-beast'}/>
        <Box 
        alignSelf={'start'}
        fontSize={'12px'}
        color={'gray.500'}
        mt={4}
        >
           © 2025 Buit By {" "} <Link href="https://hhmakwana-dot.github.io/profile" target="_blank" color={'blue.500'} fontSize={14}>Jignasa Makwana</Link>
        </Box>
    </VStack>
  )
}
