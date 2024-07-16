/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Phone({ className, imgSrc, ...props }: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src="/phone-template-white-edges.png"
        alt="a phone image"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 top-0 inset-0">
        <img
          src={imgSrc}
          alt="an overlaying image"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}

export default Phone;
