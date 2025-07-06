import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const PostHeader = ({username,avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} my={2} >
      <Flex alignItems={"center"} gap={2}  >
        <Avatar.Root size={"sm"}  >
          <Avatar.Fallback name="user profile pic" />
          <Avatar.Image src={avatar} />
        </Avatar.Root>
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.500"}>• 1 w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text fontSize={12}
        color={"blue.500"}
        fontWeight={"bold"}
        _hover={{color:"white",}} transition={"0.2s ease-in-out"} >Unfollow</Text>
        </Box>

    </Flex>
  )
}
