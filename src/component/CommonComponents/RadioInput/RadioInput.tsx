import * as React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FORM_NAME, PAYMENT_OPTION } from '../../../Constants/AllConstants';
import { useFromHook } from '../../../Context/Hook/form.hook';

interface Props {
  name: string;
  label: string;
}

const RadioInput = ({ name = "", label = '' }: Props) => {

  const { handleChange } = useFromHook();
  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name={FORM_NAME.PAYMENT}
      onChange={handleChange}
    >
      <FormControlLabel value={PAYMENT_OPTION.CREDIT_CARD} control={<Radio />} label={PAYMENT_OPTION.CREDIT_CARD} />
      <FormControlLabel value={PAYMENT_OPTION.PAYPAL} control={<Radio />} label={PAYMENT_OPTION.PAYPAL} />
      <FormControlLabel value={PAYMENT_OPTION.CASH} control={<Radio />} label={PAYMENT_OPTION.CASH} />
      <FormControlLabel value={PAYMENT_OPTION.BITCOIN} control={<Radio />} label={PAYMENT_OPTION.BITCOIN} />
    </RadioGroup>
  );
}

export default RadioInput;