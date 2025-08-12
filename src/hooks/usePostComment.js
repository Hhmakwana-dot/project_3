import { useState } from "react";
import { useShowToast } from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { usePostStore } from "../store/postStore";
import { firestore } from "../firebase/firebase";

export const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const toaster = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore((state) => state.addComment);

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return;
    if (!authUser) return toaster("Please login to comment", "error");
    if (comment.trim() === "") throw new Error("Comment cannot be empty");

    setIsCommenting(true);

    const newComment = {
      comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    };
    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });
      addComment(postId, newComment);
      toaster("Comment added successfully", "success");
    } catch (error) {
      toaster(error.message, "error");
      console.log(error.message);
    } finally {
      setIsCommenting(false);
    }
  };
  return { isCommenting, handlePostComment };
};
