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
  
  export const Region = ({ v_data }) => {
    const theme = useTheme();
  
    const UniqueItemsWithSameRegion = v_data?.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.region === current.region) && current.region.trim().length !== 0) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
  
    let sortedUniqueItemsWithSameRegion = UniqueItemsWithSameRegion?.sort(
      (p1, p2) => (p1.likelihood < p2.likelihood) ? 1 : (p1.likelihood > p2.likelihood) ? -1 : 0).slice(0, 5);

      console.log(sortedUniqueItemsWithSameRegion);
    
    const data = {
      datasets: [
        {
          data: sortedUniqueItemsWithSameRegion?.map(item => item.likelihood),
          backgroundColor: ["#D61355", "#F94A29", "#FCE22A", "#30E3DF", "#6C00FF"],
          borderWidth: 8,
          borderColor: "#FFFFFF",
          hoverBorderColor: "#FFFFFF",
        },
      ],
      labels: sortedUniqueItemsWithSameRegion?.map(item => item.region),
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
        title: sortedUniqueItemsWithSameRegion?.[0]?.region,
        value: sortedUniqueItemsWithSameRegion?.[0]?.likelihood,
        color: "#D61355",
      },
      {
        title: sortedUniqueItemsWithSameRegion?.[1]?.region,
        value: sortedUniqueItemsWithSameRegion?.[1]?.likelihood,
        color: "#F94A29",
      },
      {
        title: sortedUniqueItemsWithSameRegion?.[2]?.region,
        value: sortedUniqueItemsWithSameRegion?.[2]?.likelihood,
        color: "#FCE22A",
      },
      {
        title: sortedUniqueItemsWithSameRegion?.[3]?.region,
        value: sortedUniqueItemsWithSameRegion?.[3]?.likelihood,
        color: "#30E3DF",
      },
      {
        title: sortedUniqueItemsWithSameRegion?.[4]?.region,
        value: sortedUniqueItemsWithSameRegion?.[4]?.likelihood,
        color: "#6C00FF",
      },
    ];
  
    return (
      <Card style={{ border: ".3px solid rgba(223, 219, 219, .6)" }}>
        <CardHeader title="Top 5 Regions with most Likelihood Topics" />
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
  