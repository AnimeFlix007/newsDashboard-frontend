import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CountriesDropdown from "./filter/CountriesDropdown";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import SectorDropdown from "./filter/SectorDropdown";
import TopicDropdown from "./filter/TopicDropdown";
import EndYearDropdown from "./filter/EndYearDropdown";
import PestleDropdown from "./filter/PestleDropdown";
import SourceDropdown from "./filter/SourceDropdown";
import RegionDropdown from "./filter/RegionDropdown";

const AllNewsToolbar = ({
  v_data,
  country,
  setCountry,
  topic,
  setTopic,
  sector,
  setSector,
  endYear,
  setEndYear,
  pestle,
  setPestle,
  source,
  setSource,
  region,
  setRegion,
  search,
  setSearch,
}) => {
  const mediaQuery = useMediaQuery("(max-width:550px)");
  function resetFilterHandler() {
    setCountry("");
    setTopic("");
    setSector("");
    setEndYear("");
    setPestle("");
    setSource("");
    setRegion("");
    setSearch("");
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        margin: "1.25rem 0",
        padding: "0 1rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        <CallMissedOutgoingIcon
          style={{
            fontSize: "1.65rem",
            fontWeight: "600",
          }}
        />
        <Typography
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
          }}
        >
          All News
        </Typography>
      </Box>
      <Box
        style={
          mediaQuery
            ? {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                width: "100%",
                gridGap: ".5rem",
              }
            : {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                width: "100%",
                gridGap: ".5rem",
              }
        }
      >
        <TextField
          label="Search"
          id="outlined-size-small"
          size="small"
          value={search}
          sx={{ m: 1 }}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <CountriesDropdown
          v_data={v_data}
          country={country}
          setCountry={setCountry}
        />
        <SectorDropdown v_data={v_data} sector={sector} setSector={setSector} />
        <TopicDropdown v_data={v_data} topic={topic} setTopic={setTopic} />
        <EndYearDropdown
          v_data={v_data}
          endYear={endYear}
          setEndYear={setEndYear}
        />
        <PestleDropdown v_data={v_data} pestle={pestle} setPestle={setPestle} />
        <SourceDropdown v_data={v_data} source={source} setSource={setSource} />
        <RegionDropdown v_data={v_data} region={region} setRegion={setRegion} />
        <Box
          style={
            mediaQuery
              ? {
                  width: "90vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "center",
                }
          }
        >
          <Tooltip title="Reset" arrow>
            <Button
              onClick={resetFilterHandler}
              sx={{ ml: 2 }}
              startIcon={<FilterAltOffIcon />}
              variant="contained"
            >
              Reset
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default AllNewsToolbar;
