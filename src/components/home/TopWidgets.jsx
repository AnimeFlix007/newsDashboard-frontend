import React from "react";
import { Grid } from "@mui/material";
import MainWidgets from "./MainWidgets";

const TopWidgets = ({ data }) => {
  const totalLikelihood = data?.reduce((acc, d) => {
    return acc + d.likelihood;
  }, 0);
  const totalIntensity = data?.reduce((acc, d) => {
    return acc + d.intensity;
  }, 0);
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "1rem",
      }}
      container
      spacing={3}
    >
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <MainWidgets
          title={"Total News"}
          value={data?.length}
          rate={1.3}
          i={1}
        />
      </Grid>
      <Grid item xl={3} lg={4} sm={6} xs={12}>
        <MainWidgets
          title={"Total Likelihood"}
          value={totalLikelihood}
          rate={(totalLikelihood / data?.length).toFixed(2)}
          i={2}
        />
      </Grid>
      <Grid item xl={3} lg={4} sm={6} xs={12}>
        <MainWidgets
          title={"Total Intensity"}
          value={totalIntensity}
          rate={(totalIntensity / data?.length).toFixed(2)}
          i={3}
        />
      </Grid>
    </Grid>
  );
};

export default TopWidgets;
