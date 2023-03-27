import { Grid } from "@mui/material";
import React from "react";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import { FORM_NAME, LABEL } from "../../Constants/AllConstants";

const PersonalInfo = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.FIRST_NAME} helperText={""} name={FORM_NAME.FIRST_NAME} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.LAST_NAME} helperText={""} name={FORM_NAME.LAST_NAME} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.EMAIL} helperText={""} name={FORM_NAME.EMAIL} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.PHONE_NUMBER} helperText={""} name={FORM_NAME.PHONE_NUMBER} />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
