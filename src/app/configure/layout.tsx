import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
}

export default Layout;
