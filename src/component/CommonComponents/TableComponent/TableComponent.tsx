import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Store } from '../../../Context/Store/Store';

// const createData = (
//   id: number,
//   name: string,
//   address: string,
//   location: string,
//   contactNumber: string,
//   email: string,
// ) => {
//   return { id, name, address, location, contactNumber, email };
// }

// const rows = [
//   createData(1, 'IDM ENG', 'IDM Street 1234', 'OAKVILLE Arizona', '9999999999', 'idm.test@idm.com'),
//   createData(2, 'IDM PM', 'IDM 1234', 'OAK Arkansas', '123456789', 'idm.op@idm.com'),
// ];

interface Props {
  open: (item: any) => void;
}

const TableComponent = (props: Props) => {
  const { state } = useContext(Store);
  const { open } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell padding="checkbox">
            </TableCell> */}
            <TableCell>First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">Contact No.</TableCell>
            <TableCell align="center">Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state && state.todoList && state?.todoList.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0, cursor: 'pointer' } }}
              onClick={() => open(row)}>
              <TableCell component="th" scope="row">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;