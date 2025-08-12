import { CreatePostLogo } from '../../assets/contants'
import { Box, Button, CloseButton, Dialog, Flex, Image, Input, Portal, Textarea } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import useAuthStore from '../../store/authStore';
import { BsFillImageFill } from 'react-icons/bs';
import { useRef, useState } from 'react';
import { usePreviewImg } from '../../hooks/usePreviewImg';
import { collection, arrayUnion, updateDoc, doc, addDoc } from 'firebase/firestore';
import { firestore, storage } from '../../firebase/firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { useShowToast } from '../../hooks/useShowToast';
import useUserProfileStore from '../../store/userProfileStore';
import { usePostStore } from '../../store/postStore'
import { useLocation } from 'react-router-dom';
export const CreatePost = () => {
    const authUser = useAuthStore((state) => state.user);
    const [caption, setCaption] = useState("");
    const imageRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg(imageRef);
    const { isLoading, handleCreatePost } = useCreatePost();
    const toaster = useShowToast();
    const handlePostCreation = async () => {
        try {
            await handleCreatePost(caption, selectedFile);

        } catch (error) {
            toaster(error.message, "error");
            console.log(error.message);
        } finally {
            setCaption("");
            setSelectedFile(null);
            imageRef.current = null;

        }
    }
    return (
        <>
            <Tooltip
                hasArrow
                label={"Create"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Flex
                            alignItems={"center"}
                            gap={4}
                            _hover={{ bg: "whiteAlpha.400" }}
                            borderRadius={6}
                            p={2}
                            w={{ base: 10, md: "full" }}
                            justifyContent={{ base: "center", md: "flex-start" }}
                        >
                            <CreatePostLogo />
                            <Button variant="plain" display={{ base: "none", md: "block" }}>Create</Button>
                        </Flex>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop />
                        <Dialog.Positioner>
                            <Dialog.Content bg={"black"} border={"1px solid gray"} >
                                <Dialog.Header>
                                    <Dialog.Title>Create Post</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <Textarea placeholder="Post caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />
                                    <Input type='file' hidden ref={imageRef} onChange={handleImageChange} />
                                    <BsFillImageFill
                                        onClick={() => imageRef.current.click()}
                                        style={{ marginTop: '15px', marginLeft: "5px", cursor: 'pointer' }} size={16} />
                                    {selectedFile && (
                                        <Flex mt={5} w={"full"} position={"relative"} justifyContent={'center'}>
                                            <Image src={selectedFile} alt={'selected image'} />
                                            <CloseButton position={'absolute'} top={2} right={2} onClick={() => setSelectedFile(null)} />
                                        </Flex>
                                    )}
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Dialog.ActionTrigger asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </Dialog.ActionTrigger>
                                    <Button mr={3} onClick={handlePostCreation} loading={isLoading} >Post</Button>
                                </Dialog.Footer>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </Tooltip >
        </>

    )
}
function useCreatePost() {
    const toaster = useShowToast();
    const authUser = useAuthStore((state) => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const createPost = usePostStore((state) => state.createPost);
    const addPost = useUserProfileStore((state) => state.addPost);
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
    // const { pathname } = useLocation();
    const handleCreatePost = async (caption, selectedFile) => {
        if (!selectedFile) throw new Error("Please select an image to post");
        setIsLoading(true);
        const newPost = {
            caption: caption,
            likes: [],
            comment: [],
            createdAt: Date.now(),
            createdBy: authUser.uid,
        }
        try {
            const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
            const userDocRef = doc(firestore, "users", authUser.uid);
            const imageRef = ref(storage, `posts/${postDocRef.id}`);

            await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
            await uploadString(imageRef, selectedFile, "data_url")
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(postDocRef, { imageURL: downloadURL });

            newPost.imgURL = downloadURL;
            setUserProfile(authUser);
            createPost({ ...newPost, id: postDocRef.id });
            addPost({ ...newPost, id: postDocRef.id })

            toaster("Post created successfully", "success");

        } catch (error) {
            toaster(error.message, "error");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return { isLoading, handleCreatePost }
}