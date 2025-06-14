import { Flex, Grid, GridItem, Image, Text, Button, CloseButton, Dialog, Portal, Box, Avatar, Separator, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Comment } from '../Comment/Comment'
import { PostFooter } from '../FeedPosts/PostFooter'


export const ProfilePost = ({ img }) => {
  return (
    <>

      <Dialog.Root isCentered={true} size={{ base: '3xl', md: 'cover' }} closeOnEscape  >
        <Dialog.Trigger asChild>
          <Button variant="outline" h={'410px'} overflow={'hidden'} p={0} >

            {/* start */}

            <GridItem
              borderRadius={4}
              h={'100%'}
              w={'100%'}
              border={"1px solid"}
              borderColor={'whiteAlpha.300'}
              // aspectRatio={1/1}
              cursor={'pointer'}
              overflow={'hidden'}
              position={'relative'} >

              <Flex
                opacity={0}
                _hover={{ opacity: 1 }}
                top={0}
                left={0}
                position={'absolute'}
                right={0}
                bottom={0}
                bg={'blackAlpha.700'}
                transition={'all 0.3s ease'}
                zIndex={1}
                justifyContent={'center'} >

                <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                  <Flex>
                    <AiFillHeart size={20} />
                    <Text fontWeight={'bold'} ml={2}>7</Text>
                  </Flex>
                  <Flex>
                    <FaComment size={20} />
                    <Text fontWeight={'bold'} ml={2}>100</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Image
                position={'absolute'}
                top={0}
                w={'100%'}
                h={'100%'}
                left={0}
                right={0}
                bottom={0}
                src={img}
                alt='profile post'
              />
            </GridItem>

            {/* end */}
          </Button>
        </Dialog.Trigger>

        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner >
            <Dialog.Content h={'90vh'} maxW={'1200px'}>
              <Dialog.Body bg={'black'} pb={0} >
                <Flex gap={4} w={{ base: '90%', sm: '70%', md: 'full' }} mx={'auto'}>

                  <Box overflow={'hidden'} flex={1.5} >
                    <Image src={img} mx={'auto'} h={'80vh'} alt='profile post' display={'block'} my={'auto'} />
                  </Box>

                  <Flex flex={1} flexDir={'column'} pr={10} display={{ base: 'none', md: 'flex' }} >
                    <Flex alignItems={'center'} justifyContent={'space-between'}>

                      <Flex alignItems={'center'} gap={4}  >
                        <Avatar.Root size={'sm'}>
                          <Avatar.Fallback name="as a programmer" />
                          <Avatar.Image src='/profilepic.png' alt='as a programmer logo' />
                        </Avatar.Root>
                        <Text fontWeight={'bold'} fontSize={12}>asaprogrammer_</Text>
                      </Flex>

                      <Box _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }} borderRadius={4} p={1} >
                        <MdDelete size={20} cursor={'pointer'} />
                      </Box>
                    </Flex>
                    <Separator my={4} Color={'gray.500'} />
                    <VStack w={'full'} alignItems={'flex-start'} maxH={'350px'} overflowY={'auto'} >
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic='profilepic.png'
                        text={'Dummy images from unsplash'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/dan-abramov'}
                        text={'Nice pic'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/kent-c-dodds'}
                        text={'Good clone dude!'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic='profilepic.png'
                        text={'Dummy images from unsplash'} />
                      {/* <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/dan-abramov'}
                        text={'Nice pic'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/kent-c-dodds'}
                        text={'Good clone dude!'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic='profilepic.png'
                        text={'Dummy images from unsplash'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/dan-abramov'}
                        text={'Nice pic'} />
                      <Comment createdAt='1d ago'
                        username='asaprogrammer_'
                        profilePic={'https://bit.ly/kent-c-dodds'}
                        text={'Good clone dude!'} /> */}

                    </VStack>
                    <Separator my={4} Color={'gray.800'} />
                    <PostFooter isProfilePage={true} />
                  </Flex>
                </Flex>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

    </>
  )
}
