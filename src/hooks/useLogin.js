import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useShowToast } from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

export const useLogin = () => {
  const toaster = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return toaster("Please fill all fields", "error");
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      console.log(error);
      toaster("login failed", "error");
    }
  };
  return { loading, error, login };
};
