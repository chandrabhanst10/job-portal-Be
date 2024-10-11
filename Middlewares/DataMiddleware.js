import { CatchAsyncErrors } from "./CatchAsyncErrors.js";
import ErrorHandler from "./ErrorHandler.js";

export const nameValidation = CatchAsyncErrors(async (req, res, next) => {
    const nameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
    return nameRegex.test(req.body.name) ? next() : next(new ErrorHandler(`Please enter valid name`))
})
export const passwordValidation = CatchAsyncErrors(async (req, res, next) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,16}$/;
    return passwordRegex.test(req.body.password) ? next() : next(new ErrorHandler(`Please enter valid password`))
})

export const phoneNumberValidation = CatchAsyncErrors(async (req, res, next) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(req.body.phone) ? next() : next(new ErrorHandler(`Please enter valid phone number`))
})

export const emailValidation = CatchAsyncErrors(async (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(req.body.email) ? next() : next(new ErrorHandler(`Please enter valid email`))
})