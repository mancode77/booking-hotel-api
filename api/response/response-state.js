export const responseSuccess = (res, data) => {
    const STATUS_CODE = 200

    res.status(STATUS_CODE).json({
        took: STATUS_CODE,
        status: "OK",
        data : data,
        error: null
    })
}

export const responseError = (res, err) => {
    const STATUS_CODE = 500

    res.status(STATUS_CODE).json({
        took: STATUS_CODE,
        status: "OK",
        data : null,
        error: err
    })
}