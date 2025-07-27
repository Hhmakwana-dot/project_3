import { Box, Image } from '@chakra-ui/react'

export const Avatar = (props) => {

    return (

        <Box height={props.height || '150px'} width={props.width || '150px'} mx={'auto'} justifyContent={'center'} display={{ base: "block", md: "flex" }}  >
            <Image borderRadius={'full'} fit={'cover'} width={'full'} height={'full'} src={props.src} alt='as a programmer logo' />

        </Box>
    )
}
