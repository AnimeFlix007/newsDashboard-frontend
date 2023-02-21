import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Box } from "@mui/system";
import { Card, CardHeader, Divider } from "@mui/material";
import { UniqueItemsSectors } from "../../../utils/UniqueItems";

const SectorsLikelihood = ({ v_data }) => {
  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const options = {
    colors: [
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#8c564b",
      "#3F51B5",
      "#e53935",
      "#FB8C00",
      "#ee82ee",
      "#3cb371",
    ],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [15, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 0,
  };

  const sectorData = UniqueItemsSectors(v_data);

  return (
    <Card>
      <CardHeader title="Sectors Likelihood WordCloud" />
      <Divider />
      <div style={{ margin: "1.75rem 0" }}>
        <Resizable
          defaultSize={{
            width: "100%",
            height: "100%",
          }}
          style={resizeStyle}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <ReactWordcloud
              words={sectorData?.map((item) => {
                return {
                  text: item.sector,
                  value: item.likelihood,
                };
              })}
              options={options}
            />
          </div>
        </Resizable>
      </div>
    </Card>
  );
};

export default SectorsLikelihood;
