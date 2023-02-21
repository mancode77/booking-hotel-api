import Hotel from './../models/Hotel.js'
import {
    responseSuccess,
    responseError
} from '../response/response-state.js'
import express from 'express'

const router = express.Router()

//* CREATE
router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()

        responseSuccess(res, savedHotel)
    } catch (err) {
        responseError(res, err)
    }
})

//* UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        responseSuccess(res, updateHotel)
    } catch (err) {
        responseError(res, err)
    }
})

//* DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json('Hotel has been deleted')
    } catch (err) {
        responseError(res, err)
    }
})

//* GET
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        responseSuccess(res, hotel)
    } catch (err) {
        responseError(res, err)
    }
})

//* GET ALL
router.get('/', async (req, res, next) => {
    try {
        const hotels = await Hotel.findById("kjnknkj")

        responseSuccess(res, hotels)
    } catch (err) {
        next(err)
    }
})

export default router;