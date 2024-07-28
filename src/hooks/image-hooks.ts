import { DesignConfiguratorProps } from "@/app/configure/design/DesignConfigurator";
import { axiosRoute } from "@/axios/axiosRoute";
import { imageUpload } from "@/services/image-upload";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useUploadImage() {
  return useMutation({
    mutationFn: async (imageFile: File) => {
      const result = await imageUpload(imageFile);
      return await axiosRoute.post("/upload-image", {
        secure_url: result?.secure_url,
        height: result?.height,
        width: result?.width,
        public_id: result?.public_id,
      });
    },
    onSuccess: async (
      res: AxiosResponse<{ message: string; public_id: string }>
    ) => {
      toast.success(res.data.message);
    },
    onError(error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
        {
          description: "Please try again.",
        }
      );
    },
  });
}

export function useUploadCroppedImage() {
  const router = useRouter();
  return useMutation({
    mutationFn: async ({
      imageFile,
      public_id,
    }: {
      imageFile: File;
      public_id: string;
    }) => {
      const result = await imageUpload(imageFile, public_id);
      return await axiosRoute.patch(`/upload-image?public_id=${public_id}`, {
        croppedImageUrl: result?.secure_url,
      });
    },
    onSuccess() {
      toast.success("Image has been configured");
      router.push(`/`);
    },
    onError(error) {
      toast.error(
        (error as AxiosError<{ message: string }>).response?.data.message,
        {
          description: "Please try again.",
        }
      );
    },
  });
}
