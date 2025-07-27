import { toaster } from "@/components/ui/toaster";
export const useShowToast = () => {
  return (description, type) => {
    toaster.create({
      description: description,
      type: type,
      isClosable: true,
    });
  };
};
