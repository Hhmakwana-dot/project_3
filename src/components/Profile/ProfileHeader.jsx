import { Avatar, AvatarGroup, Box, Button, Container, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
export const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore(state => state.user);
    const visitingOwnProfileAndAuth = authUser?.username === userProfile.username;
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
    //  const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Container maxW='container.lg' >
                <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }} alignContent={'flex-start'}  >
                    <Box height={'150px'} width={'150px'} mx={'auto'} justifyContent={'center'} display={{ base: "block", md: "flex" }}  >
                        <AvatarGroup size={{ base: 'full', md: 'full' }}
                            justifySelf={"center"}
                            alignSelf={"flex-start"}
                            mx="auto"
                            variant={"outline"}>
                            <Avatar.Root name={userProfile.username} size={'full'} >
                                <Avatar.Fallback />
                                <Avatar.Image alt='as a programmer logo' src={userProfile.profilePicURL} />
                            </Avatar.Root>
                        </AvatarGroup>
                    </Box>
                    <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
                        <Flex gap={4} direction={{ base: "column", sm: "row" }}
                            justifyContent={{ base: "center", sm: "flex-start" }}
                            alignItems={"center"}
                            w={'full'}>
                            <Text fontSize={{ base: 'sm', md: 'lg' }}>
                                {userProfile.username}
                            </Text>
                            {visitingOwnProfileAndAuth && (<Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                                <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }} >Edit Profile</Button>
                            </Flex>)}
                            {visitingAnotherProfileAndAuth && (<Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                                <Button bg={'blue.500'} color={'white'} _hover={{ bg: 'blue.600' }} size={{ base: 'xs', md: 'sm' }} >Follow</Button>
                            </Flex>)}

                        </Flex>
                        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }} >
                            <Text fontSize={{ base: 'xs', md: 'sm' }} ><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.posts}</Text>
                                Posts
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.followers}</Text>
                                Followers
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.following}</Text>
                                Following
                            </Text>
                        </Flex>
                        <Flex alignItems={"center"} gap={4} >
                            <Text fontSize={'sm'} fontWeight={'bold'}>{userProfile.fullname}</Text>
                        </Flex>
                        <Text fontSize={'sm'}>{userProfile.bio}</Text>
                    </VStack>
                    {/* {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />} */}
                </Flex>
            </Container>
        </>

    )
}