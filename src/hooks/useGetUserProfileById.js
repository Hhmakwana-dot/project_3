import { use, useEffect, useState } from "react";
import { useShowToast } from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState();
  const toaster = useShowToast;
  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const userRef = await getDoc(doc(firestore, "users", userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data());
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toaster(error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, userId]);
  return { isLoading, userProfile, setUserProfile };
};
