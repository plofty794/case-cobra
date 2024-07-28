import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

async function Page({ searchParams }: PageProps) {
  const { public_id } = searchParams;

  if (!public_id || typeof public_id !== "string") {
    return notFound();
  }

  const photo = await db.phoneCasePhoto.findFirst({
    where: {
      public_id,
    },
  });

  if (!photo) {
    return notFound();
  }

  const { imageUrl, width, height } = photo;

  return (
    <DesignConfigurator imageUrl={imageUrl} width={width} height={height} />
  );
}

export default Page;
