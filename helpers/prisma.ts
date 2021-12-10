import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const findUser = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: 'jonggyuni@gmail.com',
    },
  });
  return user;
};

export type AddUserRequest = {
  name: string;
  email: string;
};
export const addUser = async ({ name, email }: AddUserRequest) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  return user;
};
