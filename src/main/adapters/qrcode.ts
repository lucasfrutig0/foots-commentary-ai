import QRCode from 'qrcode'
import { config } from '../config'

// With promises
// QRCode.toDataURL('I am a pony!')
//   .then(url => {
//     console.log(url)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// With async/await
export const generateQR = (qr: string) => {
  try {
    QRCode.toFile(
      config.paths.mainDir + '/misc/qrcode-whatsapp/qrcode.png',
      qr,
      {
        errorCorrectionLevel: 'H',
      },
    )
  } catch (err) {
    console.error(err)
  }
}
