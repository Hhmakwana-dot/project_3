import {
    Box, Flex, Button,
    CloseButton,
    Dialog,
    For,
    HStack,
    Portal,
    Field,
    Input
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/contants";
import { Tooltip } from "@/components/ui/tooltip";
import { useRef } from "react";
import { useSearchUser } from "../../hooks/useSearchUser";
import { SuggestedUser } from "../SuggestedUsers/SuggestedUser";

export const Search = () => {
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();
    const searchRef = useRef(null);
    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value)
        console.log(user);
    }
    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                >
                    <Box ml={{ base: 0, md: -3 }}>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <Button variant="plain">
                                    <SearchLogo />
                                    <Box display={{ base: "none", md: "block" }} ml={2} fontSize={'md'} >Search</Box>
                                </Button>
                            </Dialog.Trigger>
                            <Portal>
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                    <Dialog.Content bg={'black'} border={'1px solid gray'} maxW={'400px'}>
                                        <Dialog.Header>
                                            <Dialog.Title>Search user</Dialog.Title>
                                        </Dialog.Header>
                                        <Dialog.Body pb={6}>
                                            <form onSubmit={handleSearchUser} id="serch-user-form">
                                                <Field.Root id="Bio" required>
                                                    <Field.Label>Usernname
                                                        <Field.RequiredIndicator />
                                                    </Field.Label>
                                                    <Input
                                                        placeholder="asaprogrammer"
                                                        ref={searchRef}
                                                        mb={3}
                                                    />
                                                </Field.Root>
                                            </form>
                                            {user && <SuggestedUser user={user} setUser={setUser} />}
                                        </Dialog.Body>
                                        <Dialog.Footer>
                                            <Flex w={'full'} justifyContent={"flex-end"}>
                                                <Button form="serch-user-form" type="submit" ml={'auto'} size={'sm'} my={4} isLoading={isLoading}>Search</Button>
                                            </Flex>

                                        </Dialog.Footer>
                                        <Dialog.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Content>
                                </Dialog.Positioner>
                            </Portal>
                        </Dialog.Root>

                    </Box>
                </Flex>
            </Tooltip>


        </>
    )
}
