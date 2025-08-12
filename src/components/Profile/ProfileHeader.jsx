import { Box, Button, Container, Flex, HStack, Stack, Text, VStack, CloseButton, Dialog, Portal, Image } from '@chakra-ui/react'
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from './EditProfile';
import { Avatar } from './Avatar';
import { useFollowUser } from '../../hooks/useFollowUser';
export const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore(state => state.user);
    const visitingOwnProfileAndAuth = authUser?.username === userProfile.username;
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);
    return (
        <>
            <Container maxW='container.lg' >
                <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }} alignContent={'flex-start'}  >
                    <Avatar src={userProfile.profilePicURL} />
                    <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
                        <Flex gap={4} direction={{ base: "column", sm: "row" }}
                            justifyContent={{ base: "center", sm: "flex-start" }}
                            alignItems={"center"}
                            w={'full'}>
                            <Text fontSize={{ base: 'sm', md: 'lg' }}>
                                {userProfile.username}
                            </Text>
                            {visitingOwnProfileAndAuth && (<Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} variant={'outline'} size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
                                    </Dialog.Trigger>
                                    <Portal>
                                        <Dialog.Backdrop />
                                        <Dialog.Positioner>

                                            <Dialog.Content>
                                                {/* <Dialog.CloseButton /> */}
                                                <EditProfile />
                                                <Dialog.Footer mt={-8}>
                                                    <Dialog.ActionTrigger asChild>
                                                        <Button variant="outline" bg={'red.400'}
                                                            color={'white'}
                                                            flex={1}
                                                            _hover={{
                                                                bg: 'red.500',
                                                            }}>Cancel</Button>
                                                    </Dialog.ActionTrigger>
                                                </Dialog.Footer>
                                            </Dialog.Content>
                                        </Dialog.Positioner>
                                    </Portal>
                                </Dialog.Root>
                            </Flex>)}
                            {visitingAnotherProfileAndAuth && (<Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                                <Button bg={'blue.500'} color={'white'} _hover={{ bg: 'blue.600' }} size={{ base: 'xs', md: 'sm' }} onClick={handleFollowUser} isLoading={isUpdating} >{isFollowing ? "Unfollow" : "Follow"}</Button>
                            </Flex>)}

                        </Flex>
                        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }} >
                            <Text fontSize={{ base: 'xs', md: 'sm' }} ><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.posts.length}</Text>
                                Posts
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.followers.length}</Text>
                                Followers
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>{userProfile.following.length}</Text>
                                Following
                            </Text>
                        </Flex>
                        <Flex alignItems={"center"} gap={4} >
                            <Text fontSize={'sm'} fontWeight={'bold'}>{userProfile.fullname}</Text>
                        </Flex>
                        <Text fontSize={'sm'}>{userProfile.bio}</Text>
                    </VStack>
                </Flex>
            </Container>
        </>

    )
}