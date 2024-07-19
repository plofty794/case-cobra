import checkLinks from "check-links";
import prisma from "../../../../prisma";
import { NextResponse } from "next/server";

type LinkCheckResult = {
  status: string;
  link: string;
};

type UploadImageBody = {
  imageUrl: string;
};

export const POST = async (req: Request) => {
  const { imageUrl }: UploadImageBody = await req.json();
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
    const image = await prisma.phoneCasePhoto.create({
      data: {
        imageUrl,
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
    console.log(error);
    return NextResponse.json(
      { messsage: (error as Error).message },
      {
        status: 500,
      }
    );
  }
};
