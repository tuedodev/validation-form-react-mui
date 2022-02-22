import { Box, TextField, Typography, Button, MenuItem } from '@mui/material';
import { useFormValidation } from '../hooks/useFormValidation';
import { initValue, ALERT } from '../constants'

const Form = (props: FormProps) => {

    const {title} = props;
    const obj  = useFormValidation(initValue);
    let valid =  Object.keys(initValue).map(item=>{
        let isValid = obj[item].isValid;
        let isNotRequired = obj[item].required ? false : true;
        let isRequiredAndNotEmpty = isNotRequired ? true: obj[item].value.length > 0;
        return isValid && isRequiredAndNotEmpty ;
    }).filter(x=>x).length === Object.keys(initValue).length;
        
    function submit(){
        let str = ALERT;
        str += Object.keys(obj).map(item=>obj[item].value).join('\n');
        alert(str);
    }
    function reset(){
        obj.resetValue();
    }
   
  return <Box sx={{
      margin: 0,
      padding: 2,
      '& .MuiInput-root': {
        transition: theme=> theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
        }),
        '&.Mui-focused' : {
          backgroundColor: 'background.default',
        }
      },
  }}>
      {title && (<Box><Typography variant="h3" sx={{fontWeight: 800, fontSize: '1.5rem', lineHeight: 1.1, mb: 2}}>{title}</Typography></Box>)}
      <Box>
          {
              Object.keys(initValue).map((item, index)=>{
                const itemObj = initValue[item];
                return (
                    <TextField variant="standard" size="medium" key={index} fullWidth id={item} {...obj[item]?.bind} label={itemObj.label} autoComplete="off" select={itemObj.select && itemObj.select.length > 0}>
                        {
                            itemObj.select && (
                                itemObj.select.map((sel, selIndex)=> {
                                    return (<MenuItem key={selIndex} value={ sel }>{ sel }</MenuItem>)
                                })
                            )
                        }
                    </TextField>)
              })
          }          
      </Box>
      <Box display="flex" justifyContent="space-around" sx={{my: 2}}>
        <Button variant="contained" onClick={reset}>Reset</Button>
        <Button variant="contained" disabled={!valid} onClick={submit}>Send</Button>
      </Box>
  </Box>;
};

export default Form;
