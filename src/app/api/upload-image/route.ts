import { db } from "@/app/db";
import checkLinks from "check-links";
import { NextResponse } from "next/server";

type LinkCheckResult = {
  status: string;
  link: string;
};

type UploadImageBody = {
  imageUrl: string;
  width: number;
  height: number;
  public_id: string;
};

export const POST = async (req: Request) => {
  const { imageUrl, height, width, public_id }: UploadImageBody =
    await req.json();
  try {
    const results = await checkLinks([imageUrl]);
    if (results["YES"] != null) {
      return NextResponse.json(
        { messsage: results["YES"].status },
        {
          status: 400,
        }
      );
    }
    const image = await db.phoneCasePhoto.create({
      data: {
        imageUrl,
        height,
        width,
        public_id,
      },
    });

    if (!image) {
      throw new Error();
    }

    return NextResponse.json(
      { message: "Image has been uploaded" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { messsage: (error as Error).message },
      {
        status: 500,
      }
    );
  }
};
