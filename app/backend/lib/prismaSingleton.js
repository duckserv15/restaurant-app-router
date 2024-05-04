import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prismaClient = globalThis.prisma ?? prismaClientSingleton();

export default prismaClient;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaClient;
