import { useState, useEffect, useCallback } from "react"

// const dataToValidate = [
//     {
//         name: 'email',
//         value: '',
//         validationFns: [isValidEmail, isNotEmpty],
//         customErrors: ['Blogas juk email', 'Negali gi buti tuscias']
//     },
//     {
//         name: 'phone',
//         value: 'aaaa',
//         validationFns: [isValidPhone],
//         customErrors: ['Blogas tavo tel']
//     }
// ]

export default function useValidation() {
    const [failedValidations, setFailedValidations] = useState({})

    const validateData = useCallback((
        dataToValidate
    ) => {
        const fv = dataToValidate.reduce(
            (fv, { validationFns, name, value, customErrors }) => {
                const errors = validationFns.reduce((errorsArr, fn) => {
                    const error = fn(value)
                    return error ? [...errorsArr, error] : errorsArr
                }, [])
                if (errors.length) {
                    return {
                        ...fv,
                        [name]: errors.map((error, i)=> customErrors[i] || error)
                    }
                }
                return fv
            },
            {}
        )
        setFailedValidations(fv)
    }, [])
    const getFailedValidationFieldErrors = (name) => failedValidations[name]
    const omitErrorFromFailedValidations = (name) => {
        const { [name]: deleted, ...restFailedValidations } = failedValidations
        setFailedValidations(restFailedValidations)
    }

    return {
        failedValidations,
        validateData,
        getFailedValidationFieldErrors,
        omitErrorFromFailedValidations,
    }
}

export function useRealTimeDataValidation(dataToValidate) {
    const { validateData, ...restValidation } = useValidation()
    useEffect(() => {
        validateData(dataToValidate)
    }, [dataToValidate])

    return restValidation
}
