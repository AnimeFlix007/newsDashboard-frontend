import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TopWidgets from "../../components/home/TopWidgets";
import DataVisualizationNews from "../../components/home/DataVisualizationNews";
import Loader from "../../components/shared/Loader";

const Home = ({data, loading}) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      {!loading && (
        <>
          <TopWidgets data={data} />
          <DataVisualizationNews data={data} />
        </>
      )}
      {loading && <Loader />}
    </Box>
  );
};

export default Home;
