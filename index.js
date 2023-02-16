import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import hotelsRoute from './api/routes/hotels.js'
import roomsRoute from './api/routes/rooms.js'

dotenv.config()

const app = express()

const connect = async () => {
    try {
        await mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO)
        console.info('Connected to MongooDB')
    } catch (err) {
        throw err
    }
}

mongoose.connection.on('disconnected', () => console.info('MongooDB disconnected!'))

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(8800, () => {
    connect()
    console.info('Connected to backend')
})