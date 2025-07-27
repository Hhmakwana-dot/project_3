import { useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import { useShowToast } from "./useShowToast";

export const useFollowUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { authUser, setAuthUser } = useAuthStore();
  const { userProfile, setUserProfile } = useUserProfileStore();
  const toaster = useShowToast();
  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollorRef = doc(firestore, "users", userId);
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      await updateDoc(userToFollowOrUnfollorRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });
      if (isFollowing) {
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        setUserProfile({
          ...userProfile,
          followers: userProfile.following.filter(
            (uid) => uid !== authUser.userId
          ),
        });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });
        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid],
        });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      toaster(error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };
  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);
  return { isUpdating, isFollowing, handleFollowUser };
};
