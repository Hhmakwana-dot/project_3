import { toaster } from "@/components/ui/toaster";
export const useShowToast = () => {
  const showToast = (description, type) => {
    toaster.create({
      description: description,
      type: type,
      isClosable: true,
    });
  };
  return showToast;
};
