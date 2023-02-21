import { Grid } from '@mui/material'
import React from 'react'
import { Intensity } from './charts/Intensity'
import { Likelihood } from './charts/Likelihood'
import { Topics } from './charts/Topics'
import { Relevance } from './charts/Relevance'
import TopLatestNews from './news/TopLatestNews'
import SectorsLikelihood from './charts/SectorsLikelihood'

const DataVisualizationNews = ({data}) => {
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
      <Grid item lg={8} sm={6} xl={3} xs={12}>
        <Intensity v_data={data} />
      </Grid>
      <Grid item lg={4} xl={3} sm={6} xs={12}>
        <Topics v_data={data} />
      </Grid>
      <Grid item lg={6} sm={6} xl={3} xs={12}>
        <Relevance v_data={data} />
      </Grid>
      <Grid item lg={6} xl={3} sm={6} xs={12}>
        <Likelihood v_data={data} />
      </Grid>
      <Grid item lg={5} sm={6} xl={3} xs={12}>
        <SectorsLikelihood v_data={data} />
      </Grid>
      <Grid item lg={7} xl={3} sm={6} xs={12}>
        <TopLatestNews v_data={data} />
      </Grid>
    </Grid>
  )
}

export default DataVisualizationNews