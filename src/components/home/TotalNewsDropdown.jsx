import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TotalNewsDropdown({ totalNews, setTotalNews }) {
  const handleChange = (event) => {
    setTotalNews(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Total</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={totalNews}
        label="Total"
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={10}>10 News</MenuItem>
        <MenuItem value={50}>50 News</MenuItem>
        <MenuItem value={100}>100 News</MenuItem>
        <MenuItem value={200}>200 News</MenuItem>
        <MenuItem value={500}>500 News</MenuItem>
      </Select>
    </FormControl>
  );
}
