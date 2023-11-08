import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const config = {
  node: process.env.NODE,
  port: process.env.PORT,
  paths: {
    mainDir: path.join(__dirname, '..'),
    rootDir: path.join(__dirname, '..', 'src'),
  },
}
