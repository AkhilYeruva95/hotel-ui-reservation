import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useFromHook } from '../../../Context/Hook/form.hook';

interface ChipData {
  key: number;
  label: string;
}

interface Props {
  tagName: string;
  tagLabel: string;
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const TagChips = ({ tagName = "", tagLabel = "" }: Props) => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Hotel' },
    { key: 1, label: 'Booking' },
    { key: 2, label: 'LabTest' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const { handleOtherChange } = useFromHook();
  const chipHandle = (event: any) => {
    handleOtherChange(tagName, event?.target?.innerHTML);
  }
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        return (
          <ListItem key={data.key}>
            <Chip
              onClick={chipHandle}
              icon={icon}
              label={data.label}
              onDelete={data.label === 'Hotel' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}

export default TagChips;