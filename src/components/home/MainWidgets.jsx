import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";

const MainWidgets = ({ title, value, rate, i }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {title}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {value}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={
                i === 1
                  ? {
                      backgroundColor: "error.main",
                      height: 56,
                      width: 56,
                    }
                  : i === 2
                  ? {
                      backgroundColor: "primary.main",
                      height: 56,
                      width: 56,
                    }
                  : {
                      backgroundColor: "success.main",
                      height: 56,
                      width: 56,
                    }
              }
            >
              <AccountBoxIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowUpwardIcon color={"success"} />
          <Typography
            color="success"
            sx={{
              mr: 1,
              color: "green",
            }}
            variant="body2"
          >
            {rate}%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainWidgets;
