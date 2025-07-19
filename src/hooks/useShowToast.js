import { toaster } from "@/components/ui/toaster";
// import { useCallback } from "react";
export const useShowToast = () => {
  // const showToast = useCallback(
  return (description, type) => {
    toaster.create({
      description: description,
      type: type,
      isClosable: true,
    });
  };
  //  [useShowToast]
  // );
  // return showToast;
};
