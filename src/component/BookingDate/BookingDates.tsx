import { Grid } from "@mui/material";
import React from "react";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import { LABEL, FORM_NAME } from "../../Constants/AllConstants";

const BookingDates = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <BookingDatePicker label={LABEL.DATE_OF_ARRIVAL} name={FORM_NAME.DATE_OF_ARRIVAL} />
      </Grid>
      <Grid item xs={6}>
        <BookingDatePicker label={LABEL.DATE_OF_DEPARTURE} name={FORM_NAME.DATE_OF_DEPARTURE} />
      </Grid>
    </Grid>
  );
};

export default BookingDates;
