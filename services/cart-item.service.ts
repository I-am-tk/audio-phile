import { Prisma } from "@prisma/client";
import { prisma } from "lib/prisma";

export const getCartItemById = async (cartItemId: string) => {
  return await prisma.cartItem.findUnique({
    where: {
      id: cartItemId,
    },
  });
};

export const createCartItem = async (data: Prisma.CartItemCreateArgs["data"]) => {
  return await prisma.cartItem.create({
    data,
  });
};

export const removeCartItemById = async (cartItemId: string) => {
  return await prisma.cartItem.delete({
    where: {
      id: cartItemId,
    },
  });
};

export const removeUserCartItemsById = async (userId: string) => {
  return await prisma.cartItem.deleteMany({
    where: {
      userId,
    },
  });
};

export const getCartItemByProdctAndUserId = async (productId: number, userId: string) => {
  return await prisma.cartItem.findFirst({
    where: {
      userId,
      productId,
    },
  });
};

export const updatedCartItemQunatityById = async (cartItemId: string, quantity: number) => {
  return await prisma.cartItem.update({
    where: {
      id: cartItemId,
    },
    data: {
      quantity,
    },
  });
};

export const incrementCartItemQuantityById = async (cartItemId: string) => {
  return await prisma.cartItem.update({
    where: {
      id: cartItemId,
    },
    data: {
      quantity: {
        increment: 1,
      },
    },
  });
};

export const decrementCartItemQuantityById = async (cartItemId: string) => {
  const updatedCartItem = await prisma.cartItem.update({
    where: {
      id: cartItemId,
    },
    data: {
      quantity: {
        decrement: 1,
      },
    },
  });
  if (updatedCartItem.quantity === 0) {
    return await removeCartItemById(updatedCartItem.id);
  }
  return updatedCartItem;
};

export const getUserCartItemsById = async (userId: string) => {
  return await prisma.cartItem.findMany({
    where: {
      userId,
    },
  });
};
