'use client'

import {
  Button,
  Flex,
  Heading,
  Field,
  Input,
  Stack,
  HStack,
  Avatar,
  IconButton,
  Center,
  AvatarGroup,
  Badge,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { use, useRef, useState } from 'react';
import useAuthStore from '@/store/authStore';
import { usePreviewImg } from '@/hooks/usePreviewImg';
import { useShowToast } from '@/hooks/useShowToast';
import { useEditProfile } from '../../hooks/useEditProfile';
export default function EditProfile() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    bio: '',
  });
  const authUser = useAuthStore((state) => state.user);
  const fileRef = useRef(null);
  const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg();
  const { isUpdating, editProfile } = useEditProfile();
  const toaster = useShowToast();
  const handleEditProfile = async () => {
    try {
      await editProfile(inputs, selectedFile);
      setSelectedFile(null);

    } catch (error) {
      console.log(error);
      toaster(error.message, "error");
    }
  }
  return (
    <Flex
      mt={'-5vh'}
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={'linear(to-l,gray.50,gray.800)'} >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={'linear(to-l, white, gray.700'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: 'xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <Field.Root id="userName" required>
          <Field.Label>User Icon
            <Field.RequiredIndicator />
          </Field.Label>
          <Stack direction={['column', 'row']} spacing={4}>
            <Center>
              <AvatarGroup size={{ base: '2xl', md: '2xl' }} mr={12} >
                <Avatar.Root>
                  <Avatar.Fallback name="Segun Adebayo" />
                  <Avatar.Image src={selectedFile || authUser.profilePicURL} />
                </Avatar.Root>
              </AvatarGroup>
            </Center>
            <Center w="full">
              <Button w="full" background={'#25292E'} color={'white'} _hover={{ bg: '#2b3036cc' }} onClick={() => fileRef.current.click()}>Edit Profile picture</Button>
            </Center>
            <Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
          </Stack>
        </Field.Root>
        <Field.Root id="userName" required>
          <Field.Label>Full Name
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            placeholder="Full Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.fullName || authUser.fullname}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </Field.Root>
        <Field.Root id="username" required>
          <Field.Label>UserName
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            placeholder="Username"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.username || authUser.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </Field.Root>
        <Field.Root id="Bio" required>
          <Field.Label>Bio
            <Field.RequiredIndicator />
          </Field.Label>
          <Input
            placeholder="bio"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={inputs.bio || authUser.bio}
            onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
          />
        </Field.Root>
        <Stack spacing={6} mt={8} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            flex={1}
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            flex={1}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleEditProfile}
            isLoading={isUpdating}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex >
  )
}