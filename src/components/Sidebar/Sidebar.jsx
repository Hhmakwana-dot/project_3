import { Box, Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo } from '../../assets/contants';
import { BiLogOut } from 'react-icons/bi';
import { useLogout } from '../../hooks/useLogout';
import useAuthStore from "../../store/authStore";
import { SidebarItems } from './SidebarItems';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  // const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore(state => state.user);

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
          <SidebarItems />
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