import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
// import { FormHelperText } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [error, setError] = React.useState("");
  const [errorPwd, setErrorPwd] = React.useState("");
  const [helperText, setHelperText] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userDetails.email && !userDetails.password) {
      setError(true);
      setErrorPwd(true);
      setHelperText("All fields are required");
      return;
    } else {
      if (!userDetails.email.includes("@")) {
        setError(true);
        setHelperText("Please enter valid email");
        return;
      } else {
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const emailchk = validEmail.test(userDetails.email);
        if (!emailchk) {
          setError(true);
          setHelperText("Please enter valid email");
          return;
        }
      }
      //password validation
      if (userDetails.password.length < 6) {
        setErrorPwd(true);
        setHelperText("Password must be atleast 6 characters");
        return;
      } else {
        navigate("/dashboard");
      }
    }
  };

  const onChange = (event) => {
    setError(false);
    setErrorPwd(false);
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleClickShowPassword = () => {
    let showPassword = !values.showPassword;
    setValues({ showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Email Address"
            name="email"
            autoFocus
            value={userDetails.email}
            onChange={(e) => onChange(e)}
            helperText={error && helperText}
            error={error}
          />
          <br />
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              name="password"
              label="Password"
              // type="password"
              fullWidth
              required={true}
              value={userDetails.password}
              onChange={(event) => onChange(event)}
              // helperText={errorPwd && helperText}
              error={errorPwd}
              onChange={(event) => onChange(event)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={(e) => handleMouseDownPassword(e)}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText required sx={{ color: "#d32f2f" }}>
              {errorPwd && helperText}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
