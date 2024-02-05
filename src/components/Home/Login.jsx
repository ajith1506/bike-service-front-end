// Login.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authService } from "../../services/customer/authentication/auth_service";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await authService.login(values.email, values.password);
      console.log(response);
      setLoading(false);
      navigate("/cust_home");
    } catch (error) {
      console.error("Login Error", error);
      setLoading(false);
      enqueueSnackbar("Login failed. Please check your credentials.", {
        variant: "error",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <div className="login__form">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            name="email"
            inputRef={register({
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span className="span">{errors.email.message}</span>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            inputRef={register({
              required: "Password is Required",
            })}
          />
          {errors.password && (
            <span className="span">{errors.password.message}</span>
          )}
          <Button
            className="login__button"
            type="submit"
            block
            color="primary"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
          <Grid className="login__grid" container>
            <Grid item xs>
              <Link className="link" to="/member_login">
                Sign In as a Member?
              </Link>
            </Grid>
            <Grid item>
              <Link className="link" to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
