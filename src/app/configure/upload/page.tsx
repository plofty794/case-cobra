/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import DropZone, { FileRejection } from "react-dropzone";
import React, { useEffect, useState, useTransition } from "react";
import {
  ImageIcon,
  Loader2Icon,
  MousePointerSquareDashedIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { useUploadImage } from "@/hooks/image-hooks";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { mutate, isPending, isError, isSuccess, data } = useUploadImage();
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isLoading, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) {
      setIsUploading(true);
      setUploadProgress(40);
    }

    if (isSuccess) {
      startTransition(() => {
        setUploadProgress(80);
        setIsUploading(false);
        router.push(`/configure/design?public_id=${data.data.public_id}`);
      });
    }

    if (isError) {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, [isPending, isError, isSuccess, router, data?.data.public_id]);

  const onDropRejected = (fileRejections: FileRejection[]) => {
    switch (fileRejections[0].errors[0].code) {
      case "file-invalid-type":
        toast.warning("Invalid file type, must be (png, jpeg, jpg)");
        break;
      default:
        break;
    }

    setIsDraggingOver(false);
  };
  const onDropAccepted = (files: File[]) => {
    mutate(files[0]);
    setIsDraggingOver(false);
  };

  return (
    <div
      className={cn(
        "flex-1 relative h-full my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDraggingOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <DropZone
          disabled={isUploading || isPending}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          multiple={false}
          onDragOver={() => setIsDraggingOver(true)}
          onDragLeave={() => setIsDraggingOver(false)}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex flex-col items-center justify-center hover:cursor-pointer"
              {...getRootProps()}
            >
              <input type="file" name="image" {...getInputProps()} />
              {isDraggingOver && (
                <>
                  <MousePointerSquareDashedIcon className="animate-bounce size-6 text-zinc-500 mb-2" />
                  <p className="font-medium text-xs text-zinc-500">
                    <span className="font-semibold">Drop</span> the image here{" "}
                  </p>
                </>
              )}
              {isUploading && (
                <div className="flex flex-col items-center gap-2">
                  <Loader2Icon className="size-6 text-zinc-500 mb-2 animate-spin" />
                  <p className="text-sm text-zinc-500 font-semibold">
                    Uploading...
                  </p>
                  <Progress
                    value={uploadProgress}
                    className="w-40 h-2 bg-gray-300"
                  />
                  <p className="text-xs text-zinc-500">PNG, JPEG, JPG</p>
                </div>
              )}
              {isLoading && (
                <div className="flex items-center">
                  <p className="text-sm text-zinc-500 font-semibold">
                    Redirecting, please wait...
                  </p>
                </div>
              )}
              {!isLoading && !isDraggingOver && !isUploading && (
                <div className="flex flex-col items-center space-y-2">
                  <ImageIcon className="size-6 text-zinc-500" />
                  <p className="font-medium text-xs text-zinc-500">
                    <span className="font-semibold">Click</span> or{" "}
                    <span className="font-semibold">
                      drag &apos;n&apos; drop
                    </span>{" "}
                    the image here
                  </p>
                  <p className="text-xs text-zinc-500">PNG, JPEG, JPG</p>
                </div>
              )}
            </div>
          )}
        </DropZone>
      </div>
    </div>
  );
}

export default Page;
