import 'dotenv/config'
import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import path from 'path'
import AutoLoad from '@fastify/autoload'

export const server = fastify({
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

server.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
})

server.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
})

server.listen({ port: Number(process.env.PORT) || 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('process', process.env.PORT)
  console.log('Server listening at ' + address)
})
