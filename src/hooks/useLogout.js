import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useShowToast } from "./useShowToast";
import useAuthStore from "../store/authStore";

export const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const toaster = useShowToast();
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user-info");
      console.log("logout");
      logout();
    } catch (error) {
      toaster(error.message, "error");
    }
  };
  return { handleLogout, isLoggingOut, error };
};
