import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Beginner', 'Intermediate', 'Expert'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const InputLevel = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <FormControl sx={{ m: 1, width: 400 }}>
      <InputLabel id="demo-multiple-name-label">Experience Level</InputLabel>
      <Select
        sx={{ m: 0, width: 409 }}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Experience Level" />}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name} style={getStyles(name, value, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputLevel;
