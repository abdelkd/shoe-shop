import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: Params) {
  const image = await prisma?.image.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!image) {
    return NextResponse.json({}, { status: 404, statusText: "Not Found" });
  }

  return new NextResponse(image.data);
}
