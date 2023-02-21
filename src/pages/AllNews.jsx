import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AllNewsToolbar from "../components/AllNews/AllNewsToolbar";
import NotFound from "../assets/notFound.webp";
import Loader from "../components/shared/Loader";
import NewsModalDetail from "../components/AllNews/detail/NewsModalDetail";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const columns = [
  { id: "SNo.", label: "SNo.", minWidth: 50 },
  { id: "Topic", label: "Topic", minWidth: 170 },
  { id: "Sector", label: "Sector", minWidth: 100 },
  {
    id: "Title",
    label: "Title",
    minWidth: 170,
    align: "left",
  },
  {
    id: "Relivence",
    label: "Relivence",
    minWidth: 170,
    align: "center",
  },
  {
    id: "Likelihood",
    label: "Likelihood",
    minWidth: 170,
    align: "center",
  },
  {
    id: "COUNTRY / REGION",
    label: "COUNTRY / REGION",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function AllNews({data, loading}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [country, setCountry] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [pestle, setPestle] = React.useState("");
  const [source, setSource] = React.useState("");
  const [endYear, setEndYear] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);

  const [openNewsDetailModal, setOpenNewsDetailModal] = React.useState(false);
  const [singleNewsDetail, setSingleNewsDetail] = React.useState({});

  React.useEffect(() => {
    setFilteredData(
      data.filter((data) => {
        console.log(data.title.includes(search));
        return (
          data.topic.includes(topic) &&
          data.country.includes(country) &&
          data.region.includes(region) &&
          data.sector.includes(sector) &&
          data.source.includes(source) &&
          data.pestle.includes(pestle) &&
          data.end_year.includes(endYear) &&
          data.title.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
    setPage(0);
    setRowsPerPage(10);
  }, [country, region, topic, sector, pestle, source, endYear, search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function openModalHandler(item) {
    setOpenNewsDetailModal(true);
    setSingleNewsDetail(item);
  }

  return (
    <React.Fragment>
      <NewsModalDetail
        open={openNewsDetailModal}
        setOpen={setOpenNewsDetailModal}
        news={singleNewsDetail}
      />
      {loading && <Loader />}
      {!loading && (
        <AllNewsToolbar
          v_data={data}
          country={country}
          setCountry={setCountry}
          topic={topic}
          setTopic={setTopic}
          sector={sector}
          setSector={setSector}
          region={region}
          setRegion={setRegion}
          endYear={endYear}
          setEndYear={setEndYear}
          source={source}
          setSource={setSource}
          pestle={pestle}
          setPestle={setPestle}
          setSearch={setSearch}
          search={search}
        />
      )}
      {!loading && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, i) => {
                    return (
                      <TableRow
                        hover
                        style={{ cursor: "pointer" }}
                        key={item._id}
                        onClick={() => openModalHandler(item)}
                      >
                        <StyledTableCell component="th" scope="row">
                          {i + 1 + rowsPerPage * page}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.topic || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.sector || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {(item.title?.length > 30
                            ? item.title?.slice(0, 30) + "....."
                            : item.title) || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.relevance || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.likelihood || "N/A"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {(item.country || "N/A") +
                            ", " +
                            (item.region || "N/A")}
                        </StyledTableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {filteredData.length === 0 && (
            <div
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "600px" }} src={NotFound} alt="NoData" />
            </div>
          )}
          {filteredData.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={filteredData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      )}
    </React.Fragment>
  );
}
