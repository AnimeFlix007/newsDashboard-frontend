import { Backdrop, CircularProgress } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home/Home"));
const AllNews = React.lazy(() => import("../pages/AllNews"));
import { BaseURL } from "../utils/ApiService";
import { fetchData } from "../utils/fetchData";

const Router = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchData(`${BaseURL}api/dummy-data`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Routes>
          <Route path="/" element={<Home data={data} loading={loading} />} />
          <Route path="/all-news" element={<AllNews data={data} loading={loading} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
