import { PrismaClient } from "@prisma/client";
import { UmiApiRequest, UmiApiResponse } from "umi";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  switch (req.method) {
    case "GET":
      const prisma = new PrismaClient();
      const allUsers = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
          passwordHash: true,
        },
      });
      res.status(200).json(allUsers);
      prisma.$disconnect();
      break;
    default:
      res.status(405).json("请求方法不被允许");
  }
}
