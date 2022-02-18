import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import RangePicker from "./RangePicker";
// import PermanentDrawerLeft from "./PermanentDrawerLeft";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import RadioButtonsGroup from "./RadioButtonsGroup";
// import { CssBaseline } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SingleList = () => {
  const { id } = useParams();
  console.log(id, "id");

  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <Grid container spacing={0}>
          <Grid item xs={4} md={3}>
            <Box sx={{ ml: 4 }}>
              <RadioButtonsGroup />
            </Box>
          </Grid>
          <Grid item xs={8} md={9}>
            <RangePicker />
          </Grid>
        </Grid>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Update</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </>
  );
};

export default SingleList;
