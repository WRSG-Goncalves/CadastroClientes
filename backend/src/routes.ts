import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerController } from "./controlles/CreateCustomerController"
import { ListCustomerController } from "./controlles/ListCustomerController"
import { DeleteCustomerController } from "./controlles/DeleteCustomerController"


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply)
    })

    fastify.delete('/customer', async (request: FastifyRequest, reply: FastifyReply) => {

        return new DeleteCustomerController().handle(request, reply)

    })
}