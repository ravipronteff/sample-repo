import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
//import link from react router dom
import { Link, useNavigate } from "react-router-dom";
const List = () => {
  const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="xs">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => {
              navigate(`/list/${item}`);
            }}
          >
            <Card sx={{ minWidth: 600 }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {`Item ${item}`}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <br />
        </>
      ))}
    </Container>
  );
};

export default List;
