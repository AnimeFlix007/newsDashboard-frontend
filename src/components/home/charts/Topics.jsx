import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
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
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { UniqueItems } from "../../../utils/UniqueItems";

ChartJs.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  LineElement,
  ArcElement,
});

export const Topics = ({ v_data }) => {
  const theme = useTheme();

  const UniqueItemsWithSameTopics = UniqueItems(v_data)

  let sortedUniqueItemsWithSameTopics = UniqueItemsWithSameTopics?.sort(
    (p1, p2) => (p1.intensity < p2.intensity) ? 1 : (p1.intensity > p2.intensity) ? -1 : 0).slice(0, 5);
  
  const data = {
    datasets: [
      {
        data: sortedUniqueItemsWithSameTopics?.map(item => item.intensity),
        backgroundColor: ["#3F51B5", "#e53935", "#FB8C00", "#ee82ee", "#3cb371"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: sortedUniqueItemsWithSameTopics?.slice(0, 5).map(item => item.topic),
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: sortedUniqueItemsWithSameTopics?.[0]?.topic,
      value: sortedUniqueItemsWithSameTopics?.[0]?.intensity,
      color: "#3F51B5",
    },
    {
      title: sortedUniqueItemsWithSameTopics?.[1]?.topic,
      value: sortedUniqueItemsWithSameTopics?.[1]?.intensity,
      color: "#E53935",
    },
    {
      title: sortedUniqueItemsWithSameTopics?.[2]?.topic,
      value: sortedUniqueItemsWithSameTopics?.[2]?.intensity,
      color: "#FB8C00",
    },
    {
      title: sortedUniqueItemsWithSameTopics?.[3]?.topic,
      value: sortedUniqueItemsWithSameTopics?.[3]?.intensity,
      color: "#ee82ee",
    },
    {
      title: sortedUniqueItemsWithSameTopics?.[4]?.topic,
      value: sortedUniqueItemsWithSameTopics?.[4]?.intensity,
      color: "#3cb371",
    },
  ];

  return (
    <Card style={{ border: ".3px solid rgba(223, 219, 219, .6)" }}>
      <CardHeader title="Top 5 Most Intense Topics" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
       
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
