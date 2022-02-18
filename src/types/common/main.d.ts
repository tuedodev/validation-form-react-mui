type InitType = {
    [key: string]: any
}

type FormProps = {
    title?:string
}

type FormValidationItemType = {
            regex: RegExp,
            errorMsg: string
}

type FormValidationType = {
    [key: string]: {
        value: string,
        label: string,
        required?: boolean,
        valid: boolean,
        validation: Array<FormValidationItemType>,
        select?: Array<string> 
    }
}