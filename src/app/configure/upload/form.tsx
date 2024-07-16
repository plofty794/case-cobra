"use client";
import { useFormState } from "react-dom";
import { phoneCaseUploadAction } from "./actions";
import { FormHTMLAttributes, LegacyRef, MutableRefObject, useRef } from "react";

interface ImagePreview extends File {
  preview: string;
}

function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action] = useFormState(phoneCaseUploadAction, {
    message: "",
  });

  if (state.message === "success") {
    formRef.current?.reset();
  }

  return <form ref={formRef} action={action}></form>;
}

export default Form;
