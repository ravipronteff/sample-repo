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
import Search1 from "./Search";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
const SingleList = () => {
  // const { id } = useParams();
  // console.log(id, "id");
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} md={3}>
          <Box sx={{ ml: 4, mt: 2 }}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            <RadioButtonsGroup />
          </Box>
        </Grid>
        <Grid item xs={8} md={9}>
          <RangePicker value={value} setValue={setValue} />
          <Stack spacing={4} direction="row">
            <Typography variant="h6" component="h2">
              {value[0]?.toLocaleDateString()}
            </Typography>
            <Typography variant="h6" component="h6">
              {value[1]?.toLocaleDateString()}
            </Typography>

            <Button variant="contained">Update</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleList;
