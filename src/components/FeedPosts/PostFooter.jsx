import { Box, Button, FieldRoot, Flex, Group, Input, InputGroup, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/contants';

export const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    }
    else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };
  return (
    <Box mb={10} marginTop={'auto'}>
      <Flex alignItems={"center"} w={"full"} my={4} gap={4} pt="0" mb="1">
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} mr={1} as="span" fontWeight={700}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}

      {/* Comment Input */}
      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup w={"full"} mt={2} mb={1} alignItems={"center"} gap={2} endElement={<Button fontSize={14}
          color={"blue.500"}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          bg={"transparent"}>Post</Button>}>
          <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
        </InputGroup>
      </Flex>


    </Box>
  )
}
