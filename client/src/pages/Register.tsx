import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import AuthBox from "../components/AuthBox";
import { validateRegisterForm } from "../utils/validators";
import { useAppSelector } from "../store";
import { registerUser } from "../actions/authActions";
import "../index.css";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "80%",
});

const Label = styled("p")({
  color: "#3b3486",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "12px",
  margin: "9px 0 5PX 0 ",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "25px",
  border: "1px solid black",
  borderRadius: "2px",
  color: "#6f61c0",
  background: "#fff",

  fontSize: "8px",
  outline: "none",
});

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const { error, errorMessage, userDetails } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    dispatch(registerUser(credentials));
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm(credentials));
  }, [credentials]);

  useEffect(() => {
    if (userDetails?.token) {
      navigate("/dashboard");
    }
  }, [userDetails, navigate]);

  return (
    <AuthBox>
      <Typography
        variant="h5"
        sx={{
          color: "#3b3486",
          margin: "10px 0 0 1px",
          fontSize: "25px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
        }}
      >
        Welcome!
      </Typography>
      <Typography
        sx={{
          color: "#3b3486",
          fontSize: "17px",
          margin: "15px 0 10px 1px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
        }}
      >
        Create an account to get started.
      </Typography>

      <Wrapper>
        <Label>Username</Label>
        <Input
          type="email"
          placeholder="Enter your username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </Wrapper>

      <Tooltip
        title={
          isFormValid
            ? "Proceed to Register"
            : "Enter correct email address. Password should be greater than six characters and username should be between 3 and 12 characters!"
        }
      >
        <div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#3b3486",
              color: "#fff",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              width: "24vw",
              height: "22px",
              margin: "20px 0px",
            }}
            disabled={!isFormValid}
            onClick={handleRegister}
          >
            Sign Up
          </Button>
        </div>
      </Tooltip>

      <Typography sx={{ color: "#000" }} variant="subtitle2">
        {`Already have an account? `}
        <RedirectText onClick={() => navigate("/login")}>Log In</RedirectText>
      </Typography>
    </AuthBox>
  );
};

export default Register;
