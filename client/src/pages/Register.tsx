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
  fontSize: "13px",
  margin: "9px 0 5PX 2px ",
});

const Input = styled("input")({
  display: "block",
  width: "100%",
  height: "35px",
  padding: "0 10px",
  outline: "none",
  border: "1px solid #3b3486",
  borderRadius: "10px",
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
        <div style={{ display:"flex" , justifyContent:"center" }}>
          <Button
            variant="contained"
            sx={{
              display: "inline-block",
              width: "24vw",
              margin: "15px 0 5px 25px",
              color: "white",
              fontSize: "16px",
              letterSpacing: "1px",
              cursor: "pointer",
              background: "#3b3486",
              borderRadius: "30px",
              transition: ".3s",
              '@media (max-width:600px)': {
                width:"fit-content",
                height: "55%",
              },
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
