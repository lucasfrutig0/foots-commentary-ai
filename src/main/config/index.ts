import dotenv from 'dotenv'

dotenv.config()

export const config = {
  node: process.env.NODE,
  port: process.env.PORT,
}
