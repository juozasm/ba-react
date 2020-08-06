import React, { useState, useMemo } from "react"
import ModalWrapper from "../base/ModalWrapper"
import styled from "styled-components"
import useValidation, {
    useRealTimeDataValidation,
} from "../../hooks/useValidation"
import { isValidEmail, isNotEmpty, isValidPhone } from "utils/validationFns"
import InputErrors from "../base/InputErrors"

const StyledSubscriptionModal = styled.div`
    width: 500px;
    height: 300px;
    background-color: white;
    padding: 20px;
`

const StyledTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`

const StyledEmailInput = styled.input.attrs({
    placeholder: "Enter your email",
})`
    height: 40px;
`

export default function SubscriptionModal() {
    // const {
    //     failedValidations,
    //     validateData,
    //     getFailedValidationFieldErrors,
    // } = useValidation()
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        // const dataToValidate = [
        //     {
        //         name: "email",
        //         value: email,
        //         validationFns: [isValidEmail, isNotEmpty],
        //         customErrors: ["Blogas juk email", "Negali gi buti tuscias"],
        //     },
        // ]
        // validateData(dataToValidate)
    }
    const dataToValidate = useMemo(()=>[
        {
            name: "email",
            value: email,
            validationFns: email ? [isValidEmail, isNotEmpty] : [],
            customErrors: ["Blogas juk email", "Negali gi buti tuscias"],
        },
    ], [email])

    const {
        getFailedValidationFieldErrors, 
    
    } = useRealTimeDataValidation(dataToValidate)

    return (
        <ModalWrapper>
            <StyledSubscriptionModal>
                <form noValidate onSubmit={handleSubmit}>
                    <StyledTitle>Subscribe to our newsletters</StyledTitle>
                    <StyledEmailInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        <InputErrors
                            errors={getFailedValidationFieldErrors("email")}
                        />
                    }
                    <button type="submit" />
                </form>
            </StyledSubscriptionModal>
        </ModalWrapper>
    )
}
