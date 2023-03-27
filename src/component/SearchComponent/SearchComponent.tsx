import { Box, Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import FormDialog from "../CommonComponents/Dialog/Dialog";
import SearchField from "../CommonComponents/SearchField/SearchField";
import TableComponent from "../CommonComponents/TableComponent/TableComponent";
import { formEditActionHandle } from '../../Context/Actions/ReservationActions';
import { Store } from '../../Context/Store/Store';



const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const { state, dispatch } = useContext(Store);


  const handleClickOpen = (item: any) => {
    console.log("item", item);

    formEditActionHandle(item, dispatch, state);
    setEditId(item?.id)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Box sx={{ bgcolor: "#cfe8fc", height: "78vh" }}>
        <SearchField />
        <div style={{ marginTop: 25 }}>
          <TableComponent open={(item: any) => handleClickOpen(item)} />
        </div>
      </Box>
      <FormDialog open={open} onClose={handleClose} type={'edit'} id={editId} />
    </Grid>
  );
};

export default SearchComponent;
