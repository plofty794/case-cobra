"user server";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

interface ImagePreview extends File {
  preview: string;
}

export async function phoneCaseUploadAction(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const image = formData.get("image");

  try {
    await Promise.resolve(() => {
      setTimeout(() => {}, 1000);
    });

    return {
      message: "success",
    };
  } catch (error) {
    return {
      message: (error as Error).message,
    };
  }
}
