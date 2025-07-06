import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <Container maxW={"container.lg"} my={4} w={'70%'}>
            <Flex maxW={900} w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
                <Image src='/logo.png' h={20} display={{ base: "none", sm: "block" }} cursor={"pointer"} />
                <Flex gap={4}>
                    <Link to='/auth'>
                        <Button colorScheme={"blue"} size={"sm"}>
                            Login
                        </Button>
                    </Link>
                    <Link to='/auth'>
                        <Button variant={"outline"} size={"sm"}>
                            Signup
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}
