
import { VStack, Box, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Login } from './Login';
import { Signup } from './Signup';

export const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.png" h={24} cursor={"pointer"} alt='Instragram' />

                    {isLogin ? <Login /> : <Signup />}
                    {/*-------------------- OR--------------------  */}
                    <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'} >
                        <Box flex={2} h={'1px'} bg={'gray.400'} />
                        <Text mx={2} color={'white'}>OR</Text>
                        <Box flex={2} h={'1px'} bg={'gray.400'} />
                    </Flex>
                    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'} >
                        <Image src='/google.png' w={5} alt='Google logo' />
                        <Text mx={'2'} color={'blue.500'}>Log in with Google</Text>
                    </Flex>
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'} fontWeight={'bold'} fontSize={14}>
                        {isLogin ? 'sign Up' : 'Log in'}
                    </Box>
                </Flex>

            </Box>
        </>
    )
}
