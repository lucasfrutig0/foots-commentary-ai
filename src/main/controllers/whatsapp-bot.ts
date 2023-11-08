import { FastifyReply, FastifyRequest } from 'fastify'
import { whatsappBotServices } from '../services/whtasapp-bot'

export const createWhatsAppBotHandler = async (
  _req: FastifyRequest,
  res: FastifyReply,
) => {
  try {
    whatsappBotServices()
    return res.code(200).send({ message: 'Bot created' })
  } catch (error) {
    return res.code(500).send({ message: 'Bot creation failed' })
  }
}
