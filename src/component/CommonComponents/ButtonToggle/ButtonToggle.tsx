import * as React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useFromHook } from "../../../Context/Hook/form.hook";

interface Props {
  label: string,
  name: string,
}

const ButtonToggle = ({ label = "", name = "" }: Props) => {
  
  const {handleChange, values, } = useFromHook();
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} onChange={handleChange} value={values[name]} label={label} />
    </FormGroup>
  );
};

export default ButtonToggle;
