import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore';

export const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state => state.user));

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
      <Flex alignItems={"center"} gap={2} >
        <Link to={`/${authUser.username}`}>
          <Avatar.Root size={"lg"}  >
            <Avatar.Fallback />
            <Avatar.Image src={authUser.profilePicURL} />
          </Avatar.Root>
        </Link>
        <Link to={`/${authUser.username}`}>
          <Text fontSize={12} fontWeight={'bold'} >
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={'xs'}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={'medium'}
        color={"blue.400"}
        cursor={"pointer"}
        isLoading={isLoggingOut}
        onClick={handleLogout}
      >Log out
      </Button>
    </Flex>
  )
}
