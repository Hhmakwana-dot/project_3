import { Flex, Box, Spinner } from "@chakra-ui/react"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { Navbar } from "../../components/Navbar/Navbar";
import { PageLayoutSpinner } from "../../components/PageLayoutSpinner";
export const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  // const canRenderNavbar = pathname !== "/auth" && user;
  const checkingUserIsAuth = !user && loading
  if (checkingUserIsAuth) return <PageLayoutSpinner />
  return (
    <Flex >
      {/* sidebar on the left*/}

      {canRenderSidebar ? (<Box w={{ base: '70px', md: '240px' }}><Sidebar /></Box>) : null}

      {/* Navbar */}
      <Flex flexDir={canRenderNavbar ? 'column' : 'row'} flex={1}>
        {canRenderNavbar ? <Navbar /> : null}

        {/* sidebar on the right*/}
        <Box flex={1} w={{
          base: 'calc(100% - 70px)', md: 'calc(100%-240px)'
        }} mx={"auto"} >
          {children}
        </Box>
      </Flex>
    </Flex >
  )
}
