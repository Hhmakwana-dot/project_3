import React, { useEffect, useState } from "react";
import { useShowToast } from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";
export const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const toaster = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async (unm) => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", unm)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setIsLoading(false);
          return setUserProfile(null);
        }
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
        setIsLoading(false);
      } catch (error) {
        toaster(error.message, "error");
        console.log(error.message);
        setIsLoading(false);
      }
    };
    getUserProfile(username);
  }, []);
  return { userProfile, isLoading };
};
