import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import{Link as RouterLink} from 'react-router-dom'

export const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
      <Flex alignItems={"center"} gap={2} >
        <Avatar.Root size={"lg"}  >
          <Avatar.Fallback name="As a Programmer" />
          <Avatar.Image src='/profilepic.png' />
        </Avatar.Root>
        <Text fontSize={12} fontWeight={'bold'} >
          asaprogrammer_
        </Text>
      </Flex>
      <Link
      as={RouterLink}
      to="/auth"
      fontSize={14}
      fontWeight={'medium'}
      color={"blue.400"}
      style={{ textDecoration: 'none' }}
      cursor={"pointer"}
      >Log out       
      </Link>
    </Flex>
  )
}
