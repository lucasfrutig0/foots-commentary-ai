import { createWhatsAppBotHandler } from '../../controllers/whatsapp-bot'
import { server } from '../../server'

server.route({
  method: 'GET',
  url: '/whatsapp-bot',
  handler: createWhatsAppBotHandler,
})
