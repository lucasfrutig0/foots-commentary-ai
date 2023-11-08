import { Message, Whatsapp, create } from 'venom-bot'
export const createBot = async () =>
  create('sessionName', undefined, (statusSession, session) => {
    console.log('Status Session: ', statusSession)
    //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser || initBrowser || openBrowser || connectBrowserWs || initWhatsapp || erroPageWhatsapp || successPageWhatsapp || waitForLogin || waitChat || successChat
    //Create session wss return "serverClose" case server for close
    console.log('Session name: ', session)
  })
    .then(client => {
      start(client)
    })
    .catch(erro => {
      console.log(erro)
    })
// export const createBot = async (start: (client: Whatsapp) => void) =>
//   create({
//     session: 'session-name',
//     disableWelcome: true, //name of session
//   })
//     .then(async (client: Whatsapp) => start(client))
//     .catch(erro => {
//       console.log(erro)
//     })

const start = async (client: Whatsapp) => {
  client.onMessage(async (message: Message) => {
    if (!message.body || message.isGroupMsg) return
    console.log('message', message.body)

    const response = 'Hello bro'
    await client.sendText(message.from, response)
    // if (message.body === 'Hi') {
    //   await client.sendText(message.from, 'Hello there!')
    // }
  })
}

// create({
//   session: 'session-name', //name of session
// })
//   .then(client => start(client))
//   .catch(erro => {
//     console.log(erro)
//   })
