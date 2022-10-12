import { PrismaClient } from '@prisma/client'

let _db = null

if (process.env.NODE_ENV === 'production') {
  _db = new PrismaClient()
} else {
  if (!global.__db) {
    global.__db = new PrismaClient({
      log: ['query']
    })
  }

  _db = global.__db
}

function getDB() {
  return _db
}

export default getDB
