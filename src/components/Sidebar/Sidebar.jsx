import { Avatar, AvatarGroup, Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/contants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { useLogout } from '../../hooks/useLogout';
import useAuthStore from "../../store/authStore";

export const Sidebar = () => {
  // const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore(state => state.user);

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },

    {
      icon: <SearchLogo />,
      text: "Search",
    },

    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <AvatarGroup>
          <Avatar.Root size={"sm"} >
            <Avatar.Fallback name="Burak Orkmez" />
            <Avatar.Image src="/profilepic.png" />
          </Avatar.Root>
        </AvatarGroup>
      ),

      text: "Profile",
      link: `/${authUser.username}`,
    },

  ];
  const { handleLogout, isLoggingOut } = useLogout()
  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid rgb(38, 38, 38)'}
      py={8}
      w={{ base: "70px", md: "250px" }}
      position={'sticky'}
      top={0} left={0} px={{ base: 2, md: 4 }}>
      <Flex direction={'column'} w={"full"} gap={10} height={'full'} >
        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: 'block' }} cursor='pointer' >
          <InstagramLogo />
        </Link>
        <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: 'none' }} borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }} w={10} cursor='pointer' >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Link
              to={item.link || "#"}
              as={RouterLink}
              key={index}
              display={'flex'}
              alignItems={'center'}
              gap={3}
              p={2}
              borderRadius={6}
              _hover={{ bg: "whiteAlpha.200" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {item.icon}
              <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
            </Link>
          ))}
        </Flex>
        {/* LOGOUT */}

        <Flex h={"full"}>
          <Flex
            onClick={handleLogout}
            alignItems={'center'}
            gap={4}
            p={2}
            w={{ base: 100, md: "full" }}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.200" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Button display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: 'transparent' }}
              isLoading={isLoggingOut}
            >Logout</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}