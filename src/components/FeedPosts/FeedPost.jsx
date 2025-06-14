import React from 'react'
import { PostHeader } from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import { PostFooter } from './PostFooter'
export const FeedPost = ({img,username,avatar}) => {
  return (
    <>
    <Box w={"470px"} mx={"auto"}>
    <PostHeader username={username} avatar={avatar}/>
      <Box  my={2} borderRadius={4} overflow={"hidden"} >
        <Image src={img} alt={username} />
       </Box>
    <PostFooter username={username}  />
    </Box>
    </>
  )
}
