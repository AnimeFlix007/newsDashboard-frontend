import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Filler,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Line } from "react-chartjs-2";
import TotalNewsDropdown from "../TotalNewsDropdown";
import React from "react";

ChartJs.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  LineElement,
});

export const Intensity = ({ v_data }) => {
  const theme = useTheme();
  const [totalNews, setTotalNews] = React.useState(25);

  const data = {
    datasets: [
      {
        label: "Intensity",
        data: v_data
          ?.reverse()
          .slice(0, totalNews)
          .map((item) => (item?.intensity ? item?.intensity : 0)),
        backgroundColor: "rgba(175, 192, 12, 0.2)",
        borderColor: "rgb(175, 192, 12)",
        borderWidth: 1,
        fill: true,
      },
    ],
    labels: v_data
      ?.reverse()
      .slice(0, totalNews)
      .map((item) => (item?.end_year ? item?.end_year : "N/A")),
  };
  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: "theme.palette.text.secondary",
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
      },
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card>
      <CardHeader
        action={
          <TotalNewsDropdown totalNews={totalNews} setTotalNews={setTotalNews} data={[25, 50, 100, 200, 500, 1000]} />
        }
        title={"Intensity Analysis"}
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Line data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
