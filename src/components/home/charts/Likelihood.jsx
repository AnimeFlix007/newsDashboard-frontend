import {
    Box,
    Button,
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
    LineElement
  } from "chart.js";
  import { Line } from "react-chartjs-2";
import TotalNewsDropdown from "../TotalNewsDropdown";
import { useState } from "react";
  
  ChartJs.register({
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    PointElement,
    Filler,
    LineElement
  });
  
  export const Likelihood = ({ v_data }) => {
    const theme = useTheme();
    const [totalNews, setTotalNews] = useState(25);
    const data = {
      datasets: [
        {
          label: "Likelihood",
          data: v_data?.reverse()?.slice(0,totalNews).map((item) => item?.likelihood ? item?.likelihood : 0),
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          borderColor: "rgb(255, 0, 0)",
          tension: 0.2,
          fill: true,
        },
      ],
      labels: v_data?.reverse()?.slice(0,totalNews).map((item) => item?.end_year ? item?.end_year : "N/A"),
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
            <TotalNewsDropdown totalNews={totalNews} setTotalNews={setTotalNews} data={[25, 50, 100, 200]} />
          }
          title={"Likelihood Analysis"}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          {/* <FollowersOverViewDrawer /> */}
        </Box>
      </Card>
    );
  };
  