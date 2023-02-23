import User from "./../models/User.js"

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        responseSuccess(res, savedUser)
    } catch (err) {
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        responseSuccess(res, updateUser)
    } catch (err) {
        responseError(res, err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json('User has been deleted')
    } catch (err) {
        responseError(res, err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)

        responseSuccess(res, user)
    } catch (err) {
        responseError(res, err)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.findById("kjnknkj")

        responseSuccess(res, users)
    } catch (err) {
        next(err)
    }
}