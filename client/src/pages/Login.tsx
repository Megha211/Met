import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import AuthBox from "../components/AuthBox";
import { validateLoginForm } from "../utils/validators";
import { loginUser } from "../actions/authActions";
import { useAppSelector } from "../store";

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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const { error, errorMessage, userDetails } = useAppSelector(
    (state) => state.auth
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(loginUser(credentials));
  };

  useEffect(() => {
    setIsFormValid(validateLoginForm(credentials));
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
        Welcome Back!
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
        Happy to see you again!
      </Typography>

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
            ? "Proceed to Login"
            : "Enter correct email address and password should be greater than six characters"
        }
      >
        <div>
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
              transition: ".3s"
            }}
            disabled={!isFormValid}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </div>
      </Tooltip>

      <Typography sx={{ color: "#000" }} variant="subtitle2">
        {`Don't have an account? `}
        <RedirectText onClick={() => navigate("/register")}>
          Register here
        </RedirectText>
      </Typography>
    </AuthBox>
  );
};

export default Login;
