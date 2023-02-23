export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()

        responseSuccess(res, savedHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
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
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json('Hotel has been deleted')
    } catch (err) {
        responseError(res, err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)

        responseSuccess(res, hotel)
    } catch (err) {
        responseError(res, err)
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.findById("kjnknkj")

        responseSuccess(res, hotels)
    } catch (err) {
        next(err)
    }
}