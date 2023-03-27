import * as React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { ReservationData } from '../../../Constants/reservations';


export default function SearchField() {

  const onTagsChange = (_: any, values: any) => {

    console.log("event", values)
  }


  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, }}
    >
      <Autocomplete
        id="Search"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, }}
        freeSolo
        options={ReservationData.map((opt) => (opt.firstName || opt.lastName || opt.email))}
        renderInput={(params) => <TextField {...params} label="Search..." />}
        onChange={onTagsChange}
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
