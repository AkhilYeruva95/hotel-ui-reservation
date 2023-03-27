import * as React from 'react';
import { TextField } from '@mui/material';
import { ROOM_SIZE } from '../../../Constants/AllConstants';
import { useFromHook } from '../../../Context/Hook/form.hook';

interface Props {
  value?: object | undefined;
  label: string;
  name: string;
  helperText: string;
}

const DropdownItem = ({
  label = "",
  name = "",
  helperText = '',
}: Props) => {
  
  const {handleChange } = useFromHook();
  
  return (
    <TextField
      id="standard-select-currency-native"
      select
      label={label}
      name={name}
      defaultValue=""
      SelectProps={{
        native: true,
      }}
      helperText={helperText}
      variant="standard"
      onChange={handleChange}
    >
      {ROOM_SIZE.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}

export default DropdownItem;