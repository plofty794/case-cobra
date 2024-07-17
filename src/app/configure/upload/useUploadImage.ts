import { TCloudinaryResponse } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const CLOUDINARY_UPLOAD_URL = process.env.NEXT_PUBLIC_CLOUDINARY__UPLOAD_URL;
const API_KEY = process.env.CLOUDINARY_API_KEY;

function useUploadImage() {
  return useMutation({
    mutationFn: async (imageFile: File) => {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "case-cobra-preset");
      formData.append("api_key", API_KEY!);
      const res = await fetch(CLOUDINARY_UPLOAD_URL!, {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        mode: "cors",
      });
      return (await res.json()) as TCloudinaryResponse;
    },
    onSuccess: async () => {
      toast.success("Image has been uploaded");
    },
    onError(error) {
      console.log(error);
    },
  });
}

export default useUploadImage;
