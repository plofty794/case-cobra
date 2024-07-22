import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

type TConfigureImage = {
  imageUrl: string;
  height: string;
  width: string;
};

export const PATCH = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const { imageUrl, height, width }: TConfigureImage = await req.json();
  const public_id = searchParams.get("public_id");

  console.log(public_id);

  const result = cloudinary.v2.image(imageUrl, {
    height,
    width,
    crop: "fill",
  });

  console.log(result);

  return NextResponse.json(
    {
      message: "Success",
    },
    {
      status: 200,
    }
  );
};
