import { server } from '../../server'

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})
