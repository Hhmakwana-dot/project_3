import { useState } from "react";
import { useShowToast } from "@/hooks/useShowToast";

export const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const toaster = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        toaster("File size exceeds 2MB limit", "error");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toaster("Please select an image", "Error");
      setSelectedFile(null);
    }
  };
  return { selectedFile, handleImageChange, setSelectedFile };
};
