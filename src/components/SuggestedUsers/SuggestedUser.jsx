import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
export const SuggestedUser = ({followers,name,avatar}) => {
  const[isFollowed, setIsFollowed] = useState(false);
    return (
    <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'}>
      <Flex alignItems={'center'} gap={2}>
      <Avatar.Root size={"md"}  >
                <Avatar.Fallback name={name} />
                <Avatar.Image src={avatar} />
              </Avatar.Root>
              <VStack spacing={2} alignItems={'flex-start'} >
                <Box fontSize={12} fontWeight={'bold'}>
                  {name}
                </Box>
                <Box fontSize={11} color={'gray.500'}>
                  {followers} followers
                </Box>
              </VStack>
      </Flex>
      <Button
       fontSize={13}
      bg={'transparent'}
      p={0}
      h={'max-content'}
      fontWeight={'medium'}
      color={'blue.400'}
      cursor={'pointer'}
      _hover={{color:"white"}}
      onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
    
  )
}
