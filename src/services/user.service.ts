import {PrismaClient} from '@prisma/db'
import {User} from "../models/user"


export const addUser = (prisma: PrismaClient, user: User) =>
    prisma.user.create({data: user})


export const listUsers = (prisma: PrismaClient) =>
    prisma.user.findMany()

export const getUser = (prisma: PrismaClient, id: number) =>
    prisma.user.findFirst({where: {id}})

