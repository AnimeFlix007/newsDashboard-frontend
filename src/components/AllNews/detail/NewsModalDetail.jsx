import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

export default function NewsModalDetail({ news, open, setOpen }) {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {news?.insight || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {news?.title || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: .3, fontWeight: 600 }}>
          Published At {news?.published || "N/A"}
        </Typography>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: ".35rem",
          }}
          container
          spacing={3}
          sx={{mb: 3}}
        >
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            Sector - {news?.sector || "N/A"}
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            Topic - {news?.topic || "N/A"}
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            Pestle - {news?.pestle || "N/A"}
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            Source - {news?.source || "N/A"}
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            Intensity - {news?.intensity || "N/A"}
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            Relevance - {news?.relevance || "N/A"}
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            Country - {news?.country || "N/A"}
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            Region - {news?.region || "N/A"}
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            Start Year - {news?.start_year || "N/A"}
          </Grid>
          <Grid item lg={6} xl={6} sm={6} xs={6}>
            End Year - {news?.end_year || "N/A"}
          </Grid>
        </Grid>
        <Box
          style={{
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Button href={news?.url} target="_blank" rel="noopener noreferrer" size="small" variant="contained">
            View More
          </Button>
          <Button size="small" sx={{ ml: 1 }} variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
