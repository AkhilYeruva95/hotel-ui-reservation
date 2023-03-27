import * as React from 'react';
import { TextField } from '@mui/material';
import { useFromHook } from '../../../Context/Hook/form.hook';

interface Props{
    newValue?:object | undefined;
    label:string;
    name:string;
    helperText:string;
    }

const TextFiledItem = ({
    label= "",
    name= "",
    helperText="",
  }:Props) => {
    const {handleChange, values, } = useFromHook();
    return ( 
      <TextField
        name={name}
          required
          id="standard-required"
          label={label}
          defaultValue=""
          value={values[name]}
          variant="standard"
          helperText={helperText}
          onChange={handleChange}
        />
     );
}
 
export default TextFiledItem;