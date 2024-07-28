import { TCloudinaryResponse } from "@/types";
import { toast } from "sonner";

const CLOUDINARY_UPLOAD_URL = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export async function imageUpload(imageFile: File, public_id?: string) {
  try {
    if (public_id) {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("api_key", API_KEY!);
      formData.append("upload_preset", UPLOAD_PRESET!);
      formData.append("folder", "configured_uploads");

      const res = await fetch(CLOUDINARY_UPLOAD_URL!, {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        mode: "cors",
      });

      if (!res.ok) {
        throw new Error("Failed to configure image");
      }
      const data = await res.json();
      return data as TCloudinaryResponse;
    }

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("api_key", API_KEY!);
    formData.append("upload_preset", UPLOAD_PRESET!);
    formData.append("folder", "uploads");

    const res = await fetch(CLOUDINARY_UPLOAD_URL!, {
      method: "POST",
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      mode: "cors",
    });

    if (!res.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await res.json();
    return data as TCloudinaryResponse;
  } catch (error) {
    toast.error((error as Error).message, {
      description: "Please try again.",
    });
  }
}
