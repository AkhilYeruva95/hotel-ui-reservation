import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import React from "react";
import ButtonToggle from "../CommonComponents/ButtonToggle/ButtonToggle";
import RadioInput from "../CommonComponents/RadioInput/RadioInput";
import TagChips from "../CommonComponents/TagChips/TagChips";
import { FORM_NAME, LABEL } from "../../Constants/AllConstants";

const PaymentOptionAndTags = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <RadioInput name={FORM_NAME.PAYMENT} label={LABEL.PAYMENT}/>
      </Grid>
      <Grid item xs={12}>
        <TagChips tagName={FORM_NAME.TAGS}  tagLabel={LABEL.TAGS}/>
      </Grid>
      <Grid item xs={12}>
        <ButtonToggle label={LABEL.SEND_ME_A_REMINDER} name={FORM_NAME.SEND_ME_A_REMINDER} />
      </Grid>
      <Grid item xs={12}>
        <ButtonToggle label={LABEL.SUBSCRIBE_TO_NEWSLETTER} name={FORM_NAME.SUBSCRIBE_TO_NEWSLETTER} />
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label={LABEL.I_CONFIRM_THE_INFORMATION_GIVEN_ABOVE} name={FORM_NAME.I_CONFIRM_THE_INFORMATION_GIVEN_ABOVE} />
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default PaymentOptionAndTags;
