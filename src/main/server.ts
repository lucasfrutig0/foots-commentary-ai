import fastify, { FastifyRequest, FastifyReply } from 'fastify'

const server = fastify({
  serializerOpts: {
    res(reply: FastifyReply) {
      return {
        statusCode: reply.statusCode,
      }
    },
    req(req: FastifyRequest) {
      return {
        method: req.method,
        url: req.url,
        hostname: req.hostname,
        remoteAddress: req.ip,
        remotePort: req.connection.remotePort,
        headers: req.headers,
      }
    },
  },
})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
