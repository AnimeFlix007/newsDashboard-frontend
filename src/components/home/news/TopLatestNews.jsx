import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TopLatestNews({ v_data }) {
  const naviagte = useNavigate()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SNo.</StyledTableCell>
            <StyledTableCell>Topic</StyledTableCell>
            <StyledTableCell align="center">Sector</StyledTableCell>
            <StyledTableCell align="left">Insight</StyledTableCell>
            <StyledTableCell align="center">Relevance</StyledTableCell>
            <StyledTableCell align="center">Likelihood</StyledTableCell>
            <StyledTableCell align="center">Country / Region</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {v_data?.slice(0, 6).map((item, i) => (
            <TableRow hover style={{ cursor: "pointer" }} key={item._id}>
              <StyledTableCell component="th" scope="row">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {item.topic || "N/A"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {item.sector || "N/A"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {(item.insight?.length > 30
                  ? item.insight?.slice(0, 30) + "....."
                  : item.insight) || "N/A"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {item.relevance || "N/A"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {item.likelihood || "N/A"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {(item.country || "N/A") + ", " + (item.region || "N/A")}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightIcon fontSize="small" />}
          size="small"
          onClick={()=>naviagte("/all-news")}
        >
          View All
        </Button>
      </Box>
    </TableContainer>
  );
}
