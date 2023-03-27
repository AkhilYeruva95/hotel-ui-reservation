import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';
import { useFromHook } from '../../Context/Hook/form.hook';


interface Props {
  newValue?: object | undefined;
  label: string;
  name: string;
}

const BookingDatePicker = ({
  label = "",
  name = "",
}: Props) => {
  const {handleDateChange, values, } = useFromHook();

  const dateHandle = (newValue: any) => {
    console.log('dateHandle', newValue.$d);
    handleDateChange(name, newValue.$d);
    
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={values[name]}
        onChange={dateHandle}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default BookingDatePicker;