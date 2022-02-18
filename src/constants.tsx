import {  createTheme } from '@mui/material';

export const NO_ERROR = ' '; // empty char in order to display helper text field permanently
export const FIELD_REQUIRED = {regex: /\S/g, errorMsg: 'Mandatory Field'};
export const TITLE = 'Please provide your contact details:';
export const ALERT = 'Your input Data:\n\n';

export const theme = createTheme({
	palette: {
		mode: 'dark',
    primary: {
      main: '#fb8c00',
    },
    secondary: {
      main: '#b2ff59',
    },
    background: {
      default: '#303030',
      paper: '#303030'
    }
	},
	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontSize: '4.4rem',
    },
    h2: {
      fontSize: '3.6rem',
    },
    button: {
      fontSize: '1.2rem',
    }
	},
});

export const initValue: FormValidationType = {
    title: {
        value: '',
        label: 'Title',
        valid: true,
        required: false,
        validation: [],
        select: ['Ms.', 'Mrs.', 'Mr.'],
    },
    firstName: {
        value: '',
        label: 'First Name',
        valid: true,
        required: true,
        validation: [
            {regex: /[0-9a-zA-Z]{3,}/g,
            errorMsg: 'Less than 3 or invalid characters.'},
        ],
    },
    lastName: {
        value: '',
        label: 'Last Name',
        valid: true,
        required: false,
        validation: [
            {regex: /[0-9a-zA-Z]{3,}/g,
            errorMsg: 'Less than 3 or invalid characters.'},
        ],
    },
    age: {
        value: '',
        label: 'Your age',
        valid: true,
        required: true,
        validation: [
            {regex: /^[0-9]{1,3}$/g,
            errorMsg: 'You need to input a valid number.'},
        ],
    },
    email: {
        value: '',
        label: 'Email',
        valid: true,
        required: false,
        validation: [
            {regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
            errorMsg: 'Invalid email address.'},
        ],
    },
}

