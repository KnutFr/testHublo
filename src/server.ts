import {Request, ResponseToolkit, Server} from "@hapi/hapi"
import {routeInit} from "./controllers/user.controller"
import {PrismaClient} from '@prisma/db'

const prisma = new PrismaClient()
const init = async () => {
    const server: Server = new Server({
        port: process.env.PORT ?? 3000,
        host: '0.0.0.0'
    })
    prisma.$connect()
    console.log(prisma)
    routeInit(server, prisma)
    await server.start()
    console.log('Server running on %s', server.info.uri)

}
process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})
init().catch(e => {
    throw e
}).finally(async () => {
    await prisma.$disconnect()
})