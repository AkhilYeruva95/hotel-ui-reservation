import React from "react";
import { Grid } from "@mui/material";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import DropdownItem from "../CommonComponents/DropdownItem/DropdownItem";
import { FORM_NAME, HELPER_TEXT, LABEL } from "../../Constants/AllConstants";



const RoomInfo = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <DropdownItem
          name={FORM_NAME.ROOM_SIZE}
          label={LABEL.ROOM_SIZE}
          helperText={HELPER_TEXT.CHOOSE_A_ROOM_TYPE}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFiledItem label={LABEL.ROOM_QUANTIY} helperText={""} 
          name={FORM_NAME.ROOM_QUANTIY}/>
      </Grid>
    </Grid>
  );
};

export default RoomInfo;
