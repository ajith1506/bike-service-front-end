// Register.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authService } from "../../services/customer/authentication/auth_service";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";

export default function Register() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await authService.register(
        values.name,
        values.email,
        values.password
      );
      console.log(response);
      setLoading(false);
      enqueueSnackbar("Registration successful. You can now log in.", {
        variant: "success",
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration Error", error);
      setLoading(false);
      enqueueSnackbar("Registration failed. Please try again.", {
        variant: "error",
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <div className="register__form">
        <Avatar>
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Full Name"
            type="text"
            name="name"
            inputRef={register({
              required: "Name is Required",
            })}
          />
          {errors.name && <span className="span">{errors.name.message}</span>}
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
            className="register__button"
            type="submit"
            block
            color="primary"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
          <Grid className="register__grid" container>
            <Grid item>
              <Link className="link" to="/login">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
