import { Box, Flex, Text, VStack, Link, Spinner } from "@chakra-ui/react"
import { SuggestedHeader } from "./SuggestedHeader"
import { SuggestedUser } from "./SuggestedUser"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import { PageLayoutSpinner } from "../PageLayoutSpinner"
// import { Link } from "react-router-dom"

export const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  if (isLoading) return <PageLayoutSpinner />
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />



      {suggestedUsers.length !== 0 && (
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'} >
          <Text fontSize={'14px'} fontWeight={'bold'} color={'gray.500'}>
            Suggested for you
          </Text>
          <Text fontSize={'12px'} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
            See All
          </Text>
        </Flex>
      )}
      {suggestedUsers.map((user) => (
        <SuggestedUser key={user.id} user={user} />
      ))}

      <Box
        alignSelf={'start'}
        fontSize={'12px'}
        color={'gray.500'}
        mt={4}
      >
        © 2025 Buit By {" "} <Link href="https://hhmakwana-dot.github.io/profile" target="_blank" color={'blue.500'} fontSize={14}>Jignasa Makwana</Link>
      </Box>
    </VStack>
  )
}
