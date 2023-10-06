import { server } from '../../server'

server.route({
  method: 'GET',
  url: '/whatsapp-bot',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  },
})
