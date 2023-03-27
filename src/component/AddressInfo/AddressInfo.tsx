import { Grid } from "@mui/material";
import React from "react";
import MultiSelect from "../CommonComponents/MultipleSelect/MultiSelect";
import TextFiledItem from "../CommonComponents/TextFiledItem/TextFiledItem";
import { FORM_NAME, LABEL } from "../../Constants/AllConstants";

const AddressInfo = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.STREET_NAME} helperText={""} name={FORM_NAME.STREET_NAME} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.STREET_NUMBER} helperText={""} name={FORM_NAME.STREET_NUMBER} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.ZIP} helperText={""} name={FORM_NAME.ZIP} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.STATE} helperText={""} name={FORM_NAME.STATE} />
      </Grid>
      <Grid item xs={12}>
        <TextFiledItem label={LABEL.CITY} helperText={""} name={FORM_NAME.CITY} />
      </Grid>
      <Grid item xs={12}>
        <MultiSelect label={LABEL.EXTRA} multiName={FORM_NAME.EXTRA} />
      </Grid>
    </Grid>
  );
};

export default AddressInfo;
