"use client";
import { useFormState } from "react-dom";
import { phoneCaseUploadAction } from "./actions";
import { ReactNode, useRef } from "react";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ImagePreview extends File {
  preview: string;
}

function Form({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action] = useFormState(phoneCaseUploadAction, {
    message: "",
  });

  if (state.message === "success") {
    formRef.current?.reset();
  }

  if (state.message !== "success") {
    toast.warning("Oops! Failed to upload the image", {
      description: "Refresh the page and try again.",
    });
  }

  return (
    <form className={cn("h-full", className)} ref={formRef} action={action}>
      {children}
    </form>
  );
}

export default Form;
