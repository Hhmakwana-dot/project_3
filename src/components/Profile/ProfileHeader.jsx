import { Avatar, AvatarGroup, Box, Button, Container, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'


export const ProfileHeader = () => {
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
                            <Avatar.Root>
                                <Avatar.Fallback name="as a programmer" />
                                <Avatar.Image src='/profilepic.png' alt='as a programmer logo' />
                            </Avatar.Root>
                        </AvatarGroup>
                    </Box>
                    <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
                        <Flex gap={4} direction={{ base: "column", sm: "row" }}
                            justifyContent={{ base: "center", sm: "flex-start" }}
                            alignItems={"center"}
                            w={'full'}>
                            <Text fontSize={{ base: 'sm', md: 'lg' }}>
                                asaprogrammer_
                            </Text>
                            <Flex gap={4} alignItems={"center"} justifyContent={"center"} >
                                <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }} >Edit Profile</Button>
                            </Flex>
                        </Flex>
                        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }} >
                            <Text fontSize={{ base: 'xs', md: 'sm' }} ><Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
                                Posts
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>145</Text>
                                Followers
                            </Text>
                            <Text fontSize={{ base: 'xs', md: 'sm' }}><Text as={'span'} fontWeight={'bold'} mr={1}>129</Text>
                                Following
                            </Text>
                        </Flex>
                        <Flex alignItems={"center"} gap={4} >
                            <Text fontSize={'sm'} fontWeight={'bold'}>AS a Programmer</Text>
                        </Flex>
                        <Text fontSize={'sm'}>I am a software engineer and I love to code.</Text>
                    </VStack>
                </Flex>
            </Container>
        </>

    )
}