import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import BookingDates from "../../BookingDate/BookingDates";
import RoomInfo from "../../RoomInfo/RoomInfo";
import PersonalInfo from "../../PersonalInfo/PersonalInfo";
import PaymentOptionAndTags from "../../PaymentOptionAndTags/PaymentOptionAndTags";
import AddressInfo from "../../AddressInfo/AddressInfo";
import { editDetails, addDetails } from '../../../Context/Actions/Actions';
import { Store } from '../../../Context/Store/Store';
// import { useFromHook } from '../../../Context/Hook/form.hook';
import { DataConversion } from '../../../Context/Hook/dataConversion';


// const editTemp = {
//   "stay": {
//     "arrivalDate": "2021-11-18T05:00:00.000Z",
//     "departureDate": "2021-11-25T05:00:00.000Z"
//   },
//   "room": {
//     "roomSize": "business-suite",
//     "roomQuantity": 3
//   },
//   "firstName": "IDM",
//   "lastName": "ENG",
//   "email": "idm.test@idm.com",
//   "phone": "9999999999",
//   "addressStreet": {
//     "streetName": "IDM Street",
//     "streetNumber": "1234"
//   },
//   "addressLocation": {
//     "zipCode": "123456",
//     "state": "Arizona",
//     "city": "OAKVILLE"
//   },
//   "extras": [
//     "extraBreakfast",
//     "extraTV",
//     "extraWiFi",
//     "extraParking",
//     "extraBalcony"
//   ],
//   "payment": "cc",
//   "note": "idm lab test",
//   "tags": [
//     "hotel",
//     "booking",
//     "labtest"
//   ],
//   "reminder": true,
//   "newsletter": true,
//   "confirm": false
// };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  open: boolean;
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
  type: 'add' | 'edit'
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, id, type, ...other } = props;


  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
  type: 'add' | 'edit';
  id?: string | number | null;
}

const FormDialog = (props: Props) => {
  const { open, onClose, type, id } = props;
  // const { values } = useFromHook();

  const { state, dispatch } = useContext(Store);

  const handleEditDetails = () => {
    // console.log("edit values", values);
    var finalVal = DataConversion(state?.formVal);
    editDetails(id, finalVal, dispatch);
  }

  const handleAddDetails = () => {
    console.log("state", state);
    var finalVal = DataConversion(state?.formVal);
    console.log("finalVal", finalVal);
    console.log('handleAddDetails');
    addDetails(finalVal, dispatch);
  }


  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={onClose} open={false} type={type}>
          Booking Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <BookingDates />
          <RoomInfo />
          <PersonalInfo />
          <AddressInfo />
          <PaymentOptionAndTags />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button autoFocus variant="contained" onClick={() => type === 'edit' ? handleEditDetails() : handleAddDetails()}>
            {type === 'edit' ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default FormDialog;
