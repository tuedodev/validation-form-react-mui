import React, { useState } from "react"
import { NO_ERROR, FIELD_REQUIRED } from '../constants'

export const useFormValidation = (props: FormValidationType) => {
    const {initValue, initValid, initHelperText} = getInitValues();
    const [value, setValue] = useState(initValue);
    const [isValid, setIsValid] = useState(initValid);
    const [helperText, setHelperText] = useState(initHelperText);

    function getInitValues(){
        let initValue: InitType = {};
        let initValid: InitType = {};
        let initHelperText: InitType = {};
        for (const [key, value] of Object.entries(props)) {
            initValue[key] = value.value;
            initValid[key] = value.valid;
            initHelperText[key] = NO_ERROR;
        }
        return {initValue, initValid, initHelperText};
    }

    let obj: InitType = {};

    for (const [key, val] of Object.entries(props)) {
        obj[key] = {
            value: value[key],
            isValid: isValid[key],
            required: val.required,
            bind: {
                value: value![key],
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(prev => {
                        return {...prev, [key]: event.target.value};
                    });
                    const required = event.target.required;
                    let validationArr = required ? [FIELD_REQUIRED]: [];
                    validationArr = validationArr.concat(val.validation);
                    let errArr = validationArr.map(v => {
                        return event.target.value.search(v.regex);
                    });
                    let validationState = errArr.filter(i => i < 0).length === 0 ? true : false;
                    let index = errArr.findIndex(e => e === -1 );
                    let errorMsg = validationState ? NO_ERROR : validationArr[index].errorMsg;
                    setHelperText(prev => {
                        return {...prev, [key]: errorMsg};
                    });
                    setIsValid(prev => {
                        return {...prev, [key]: validationState};
                    });
                },
                helperText: isValid[key] ? NO_ERROR : helperText![key],
                error: !isValid[key],
            },
        }
    }
    obj.resetValue = () => {
        const {initValue, initValid, initHelperText} = getInitValues();
        setValue(initValue);
        setIsValid(initValid);
        setHelperText(initHelperText);
    }
    return obj;
}