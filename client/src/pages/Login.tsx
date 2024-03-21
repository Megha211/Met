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
  fontSize: "12px",
  margin: "9px 0 5PX",
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
// megha
export default Login;
