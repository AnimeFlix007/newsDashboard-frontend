import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TotalNewsDropdown({ totalNews, setTotalNews, data }) {
  const handleChange = (event) => {
    setTotalNews(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Last</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={totalNews}
        label="Last"
        onChange={handleChange}
        size="small"
      >
        {data.map(item => <MenuItem value={item}>{item} News</MenuItem>)}
      </Select>
    </FormControl>
  );
}
