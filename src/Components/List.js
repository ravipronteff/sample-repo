import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 1,
      }}
    >
      {Array(50)
        .fill(0)
        .map((_, item) => (
          <Card
            variant="outlined"
            sx={{
              minWidth: "200px",
              minHeight: "200px",
              margin: "0.5rem",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              navigate(`/list/${item}`);
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                {`Item ${item + 1}`}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
    // <Container component="main" maxWidth="xs">
    // <Grid sx={{ marginLeft: "0", marginRight: "0" }}>
    //   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
    //     <React.Fragment key={item.toString()}>
    //       <Grid item xs={12} md={3} sm={6}>

    //       </Grid>
    //       {/* </Box> */}
    //       {/* <br /> */}
    //     </React.Fragment>
    //   ))}
    // </Grid>
    // </Container>
  );
};

export default List;
