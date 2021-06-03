import {Request, ResponseToolkit, Server} from "@hapi/hapi"
import * as UserService from "../services/user.service"
import {User} from "../models/user"
import {PrismaClient} from '@prisma/db'

export const routeInit = (server: Server, prisma: PrismaClient) => {
    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: (request: Request, h: ResponseToolkit) => {
            return UserService.getUser(prisma, request.params.id)
        }
    })

    server.route({
        method: 'GET',
        path: '/users',
        handler: (request: Request, h: ResponseToolkit) => {
            return UserService.listUsers(prisma)
        }
    })

    server.route({
        method: 'POST',
        path: '/users',
        handler: (request: Request, h: ResponseToolkit) => {
            return UserService.addUser(prisma, request.payload as User)
        }
    })

}