import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useFollowUser } from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

export const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);
  const onFollowUser = async () => {
    await handleFollowUser();
    setUser((pre) => ({
      ...pre,
      followers: isFollowing
        ? pre.followers.filter((follower) => follower.uid !== authUser.uid) :
        [...pre.followers, authUser],
    }))
  }
  return (
    <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar.Root size={"md"}  >
          <Avatar.Fallback name={user.username} />
          <Avatar.Image src={user.profilePicURL} />
        </Avatar.Root>
        <VStack spacing={2} alignItems={'flex-start'} >
          <Box fontSize={12} fontWeight={'bold'}>
            {user.fullName}
          </Box>
          <Box fontSize={11} color={'gray.500'}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={'transparent'}
          p={0}
          h={'max-content'}
          fontWeight={'medium'}
          color={'blue.400'}
          cursor={'pointer'}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      )}
    </Flex>

  )
}
