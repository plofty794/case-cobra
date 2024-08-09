import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import checkLinks from "check-links";
import { PhoneCasePhoto } from "@prisma/client";

type UploadImageBody = {
  secure_url: string;
  height: number;
  width: number;
  public_id: string;
};

export const POST = async (req: Request) => {
  const {
    secure_url,
    height,
    width,
    public_id,
  }: Pick<PhoneCasePhoto, "height" | "width" | "public_id"> & {
    secure_url: string;
  } = await req.json();
  try {
    const results = await checkLinks([secure_url]);
    if (results["YES"] != null) {
      return NextResponse.json(
        { messsage: results["YES"].status },
        {
          status: 400,
        }
      );
    }

    const phoneCasePhoto = await db.phoneCasePhoto.create({
      data: {
        imageUrl: secure_url,
        height,
        width,
        public_id,
      },
    });

    if (!phoneCasePhoto) {
      return NextResponse.json(
        { message: "Failed to upload your image" },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      { message: "Image has been uploaded", public_id },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      {
        status: 500,
      }
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const {
    croppedImageUrl,
    caseColor,
    finish,
    material,
    model,
  }: Pick<
    PhoneCasePhoto,
    "croppedImageUrl" | "caseColor" | "finish" | "material" | "model"
  > = await req.json();
  const public_id = searchParams.get("public_id");
  try {
    if (!public_id) {
      return NextResponse.json(
        {
          message: "Bad Request",
        },
        {
          status: 400,
        }
      );
    }

    const phoneCasePhoto = await db.phoneCasePhoto.findFirst({
      where: {
        public_id,
      },
    });

    phoneCasePhoto &&
      (await db.phoneCasePhoto.update({
        where: {
          id: phoneCasePhoto?.id,
        },
        data: {
          croppedImageUrl,
          caseColor,
          finish,
          material,
          model,
        },
      }));

    return NextResponse.json(
      {
        message: "Image has been configured",
      },
      {
        status: 200,
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
