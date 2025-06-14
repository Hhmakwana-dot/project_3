import { Flex,Box } from "@chakra-ui/react"
//import  { Sidebar }  from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
export const PageLayout = ({children}) => {
    const {pathname}=useLocation();
  return (
    <Flex> 
        {/* sidebar on the left*/}
        {pathname !== '/auth' ?(
           
            <Sidebar/>
                   ) : null}
        
        {/* sidebar on the right*/}

        <Box flex={1} w={{ base: "calc(100% - 70px)",md:"calc(100% - 240px)" }} mx={"auto"} >
            {children}
        </Box>
    </Flex>
  )
}
