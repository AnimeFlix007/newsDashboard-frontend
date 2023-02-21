import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, source, theme) {
  return {
    fontWeight:
      source?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SourceDropdown({ source, setSource, v_data }) {
  const theme = useTheme();
  const AllSource = v_data?.reduce((accumulator, current) => {
    if (
      !accumulator?.find((item) => item.source === current.source) &&
      current.source.trim().length !== 0
    ) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  const handleChange = (event) => {
    setSource(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }} size="small">
        <InputLabel id="demo-multiple-name-label">Source</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={source}
          onChange={handleChange}
          input={<OutlinedInput label="Source" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {AllSource.map((name) => (
            <MenuItem
              key={name._id}
              value={name.source}
              style={getStyles(name.source, source, theme)}
            >
              {name.source}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
