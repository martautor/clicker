import { log } from 'console'
import express from 'express'
import path from 'path'
import router from './routes/tap.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(router)

app.listen(PORT, () => {
    log(`Server started on PORT ${PORT}`)
})