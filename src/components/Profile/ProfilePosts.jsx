import React, { useEffect } from 'react'
import { ProfilePost } from './ProfilePost'
import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import { useState } from 'react'
export const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, [])
  return (
    <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={1} columnGap={1}>
      {isLoading && [0, 1, 2, 3, 4, 5,].map((_, idx) => (
        <VStack key={idx} alignItems={'flex-start'} gap={4}>
          <Skeleton w={'full'} >
            <Box h={'300px'}>contents wrapped </Box>
          </Skeleton>
        </VStack>
      ))}
      {!isLoading && (
        <>
          <ProfilePost img='/img1.png' />
          <ProfilePost img='/img2.png' />
          <ProfilePost img='/img3.png' />
          <ProfilePost img='/img4.png' />
        </>
      )}
    </Grid>
  )
}
