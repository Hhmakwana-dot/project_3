import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import { FeedPost } from './FeedPost'
import { useEffect, useState } from 'react'

export const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3, 4].map((_, idx) => (
        <VStack kety={idx} mb={10} gap={4} alignItems={"flex-start"} >
          <Flex gap='2'>
            <SkeletonCircle size="10" />
            <VStack alignItems='flex-start' gap={2}>
              <Skeleton height='10' w={'300px'} />
              <Skeleton height='10' w={'300px'} />
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={'500px'}>content wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {/* Show loading state */}

      {!isLoading && (
        <>
          <FeedPost img='/img1.png' username="burakorkmezz" avatar='img1.png' />
          <FeedPost img='/img2.png' username="josh" avatar='img2.png' />
          <FeedPost img='/img3.png' username="janedoe" avatar='img3.png' />
          <FeedPost img='/img4.png' username="johndoe" avatar='img4.png' />
        </>
      )}

    </Container>
  )
}   
