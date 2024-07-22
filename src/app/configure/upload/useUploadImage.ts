import { ImageUploadResponse, TCloudinaryResponse } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { axiosRoute } from "../../../../axios/axiosRoute";

const CLOUDINARY_UPLOAD_URL = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

function useUploadImage() {
  return useMutation({
    mutationFn: async (imageFile: File) => {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET!);
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
    onSuccess: async (cloduinaryResponse) => {
      const res: ImageUploadResponse = await axiosRoute.post("/upload-image", {
        imageUrl: cloduinaryResponse.secure_url,
        width: cloduinaryResponse.width,
        height: cloduinaryResponse.height,
        public_id: cloduinaryResponse.public_id,
      });
      toast.success(res.data.message);
    },
    onError() {
      toast.error("Failed to upload image", {
        description: "Refresh the page and try again.",
      });
    },
  });
}

export default useUploadImage;
