import { verifyToken } from "@/utils/jwt";
import { PrismaClient } from "@prisma/client";
import type { UmiApiRequest, UmiApiResponse } from "umi";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  let prisma: PrismaClient;
  switch (req.method) {
    // get查找所有文章
    case "GET":
      prisma = new PrismaClient();
      const allPosts = await prisma.post.findMany();
      // const allPosts = await prisma.post.findMany({
      //   include: { author: true },
      // });
      res.status(200).json(allPosts);
      await prisma.$disconnect();
      break;
    //post发表文章
    case "POST":
      if (!req.cookies?.token) {
        return res.status(401).json({
          message: "没有权限",
        });
      }
      const authorId = (await verifyToken(req.cookies.token)).id;
      prisma = new PrismaClient();
      const newPost = await prisma.post.create({
        data: {
          title: req.body.title,
          content: req.body.content,
          createdAt: new Date(),
          authorId,
          tags: req.body.tags.join(","),
          imageUrl: req.body.imageUrl,
        },
      });
      res.status(200).json(newPost);
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({ error: "请求方法不被允许" });
  }
}
