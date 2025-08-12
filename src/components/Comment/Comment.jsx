import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import { useGetUserProfileById } from '../../hooks/useGetUserProfileById'
import { Link } from 'react-router-dom';

export const Comment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);
    if (isLoading) return <CommentSkeleton />
    return (
        <Flex gap={4} >
            <Link to={`/profile/${userProfile.username}`}>
                <Avatar.Root size={'md'} >
                    <Avatar.Fallback name={userProfile.username} />
                    <Avatar.Image src=
                        {userProfile.profilePicURL} />
                </Avatar.Root>
            </Link>
            <Flex direction={'column'}>
                <Flex gap={2} alignItems={'center'}>
                    <Link to={`/profile/${userProfile.username}`}>

                        <Text fontWeight={'bold'} fontSize={12}>
                            {userProfile.username}
                        </Text>
                    </Link>
                    <Text fontSize={14}>{comment.comment}</Text>
                </Flex>
                <Text fontSize={12} color={'gray'}>
                    {new Date(comment.createdAt).toISOString().split('T')[0]}
                </Text>

            </Flex>
        </Flex>

    )
}
const CommentSkeleton = () => {
    return (
        <Flex gap={4} w={'full'} alignItems={'center'}>
            <SkeletonCircle h={10} w='10' />
            <Flex gap={1} flexDir={'column'} >
                <Skeleton height={2} width={100} />
                <Skeleton height={2} width={50} />
            </Flex>
        </Flex>
    )
}
