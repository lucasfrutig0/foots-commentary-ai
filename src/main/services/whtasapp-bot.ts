import { generateQR } from '../adapters/qrcode'
import { WhatsAppBotClient } from '../adapters/whatsappbot'
import { config } from '../config'

export const whatsappBotServices = () => {
  WhatsAppBotClient.on('qr', (qr: string) => {
    console.log('QR RECEIVED', config.paths.rootDir)
    generateQR(qr)
  })

  WhatsAppBotClient.on('ready', () => {
    console.log('Client is ready!')
  })

  WhatsAppBotClient.initialize()
}
