import { Flex,Box } from "@chakra-ui/react"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom";
export const PageLayout = ({children}) => {
    const {pathname}=useLocation();
  return (
    <Flex> 
        {/* sidebar on the left*/}
        {pathname !== '/auth' ?(
          <Box w={{ base: "0", md: "250px" }} display={{ base: "none", md: "block" }}>    
            <Sidebar/>
          </Box>
        ) : null}
        
        {/* sidebar on the right*/}

        <Box flex={1} w={{ base: "calc(100% - 70px)",md:"calc(100% - 240px)" }} >
            {children}
        </Box>
    </Flex>
  )
}
