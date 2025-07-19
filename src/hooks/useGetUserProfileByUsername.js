import React, { useEffect, useState } from "react";
import { useShowToast } from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";
export const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const toaster = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  //const UserProfile = useUserProfileStore((state) => state.UserProfile);
  useEffect(() => {
    const getUserProfile = async (unm) => {
      // console.log(unm);
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", unm)
        );

        console.log("Query:", q);
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setIsLoading(false);
          return setUserProfile(null);
        }
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        console.log("UserDoc:", userDoc);
        setUserProfile(userDoc);
        console.log(userDoc);
        setIsLoading(false);
      } catch (error) {
        toaster(error.message, "error");
        setIsLoading(false);
      }
    };
    getUserProfile(username);
  }, []);
  return { userProfile, isLoading };
};
