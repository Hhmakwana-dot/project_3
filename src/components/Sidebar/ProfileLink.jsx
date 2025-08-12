import { Avatar, AvatarGroup, Box, Link, Spinner } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { Tooltip } from "@/components/ui/tooltip"
export const ProfileLink = () => {
    const authUser = useAuthStore((state) => state.user);
    if (!authUser) return <Spinner />;
    return (
        <Tooltip
            hasArrow
            label={"Profile"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Link
                display={"flex"}
                to={`/${authUser.username}`}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
            >
                <Avatar.Root shape="full" size="lg">
                    <Avatar.Fallback name={authUser.username} />
                    <Avatar.Image src={authUser.profilePicURL} />
                </Avatar.Root>
                <Box display={{ base: "none", md: "block" }}>Profile</Box>
            </Link>
        </Tooltip>
    );
};

