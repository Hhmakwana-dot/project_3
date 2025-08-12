import { useState } from "react";
import { useShowToast } from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
export const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const toaster = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUser(null);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return toaster("User not found", "error");
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      toaster(error.message, "error");
      console.log(error.message);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, getUserProfile, user, setUser };
};
