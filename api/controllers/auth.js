import User from './../models/User.js'
import { createError } from './../utils/error.js'
import {
    genSaltSync,
    hashSync,
    compare
} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { responseSuccessWithToken } from './../utils/response-state.js'

export const register = async (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body

    try {
        const salt = genSaltSync(10)
        const hash = hashSync(password, salt)

        const newUser = new User({
            username,
            email,
            password: hash
        })

        await newUser.save()

        res.status(200).send("User has been created")
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req?.body?.username })

        if (!user) return next(createError(404, 'User not found!'))

        const isPasswordCorrect = await compare(
            req?.body?.password,
            user?.password
        )

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT)

        if (!isPasswordCorrect) {
            return next(createError(404, 'Wrong password or username!'))
        }

        const { password, isAdmin, ...otherDetails } = user._doc

        responseSuccessWithToken(res, { ...otherDetails }, token)
    } catch (err) {
        next(err)
    }
}