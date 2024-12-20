import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaGoogle, FaFacebookF, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
// Styled Components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; /* Push footer to the bottom */
  align-items: center;
  min-height: 100vh; /* Full viewport height */
   
  margin: 0; /* Ensure no margins on the container */
  background: #000; /* Solid black background */
  color: #fff;
`;


const LoginBox = styled.div`
  width: 500px;
  background: #121212;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
   margin: 3rem auto; /* Add space at the top and center it horizontally */
  flex-grow: 1; /* Push the footer to the bottom */
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem; /* Adjusted spacing for better layout */
`;

const Button = styled.button`
  width: 100%;
  height: 50px; /* Set a fixed height for uniformity */
  margin: 0.5rem 0;
  border: 1.5px solid #6d6d6d; /* Border color */
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  background: #000; /* Black background */
  color: #fff; /* White text */
  font-size: 1rem;
  display: flex;
  align-items: center; /* Align content vertically */
  justify-content: center; /* Center align content */
  gap: 12px; /* Space between icon and text */
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1.5px solid #fff;
    background: #000; /* Ensure background doesn't change */
  }

  .icon {
    width: 24px; /* Uniform width for all icons */
    height: 24px; /* Uniform height for all icons */
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%; /* Make the SVG fill the container */
      height: 100%; /* Make the SVG fill the container */
    }
  }

  .text {
    flex: 1; /* Adjust text to take the available space */
    text-align: center; /* Align text to the left */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem; /* Add consistent spacing */
  border: 1px solid #333;
  border-radius: 4px;
  background: #1c1c1c;
  color: #fff;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #1db954;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem; /* Consistent spacing */
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  padding-right: 2.5rem; /* Space for the toggle icon */
  border: 1px solid #333;
  border-radius: 4px;
  background: #1c1c1c;
  color: #fff;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #1db954;
  }
`;

const ToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #6d6d6d;

  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #aaa;
  padding: 1rem 0;
  width: 100%;
`;


const FooterContainer = styled.div`
  background-color: #121212; /* Footer box color */
  padding: 1rem;
  width: 100%; /* Ensure full width */
  text-align: center;
  margin-top: auto; /* Push the footer to the bottom */
`;

const FooterLink = styled.a`
  color: #1db954;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Log in to Vibestream</Title>

        <Button borderColor="#fff" color="#000">
  <div className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  </div>
  <span className="text">Continue with Google</span>
</Button>
        <Button>
          <div className="icon">
            <FaFacebookF style={{ color: "#1877F2" }} />
          </div>
          <span className="text">Continue with Facebook</span>
        </Button>
        <Button>
          <div className="icon">
            <FaApple style={{ color: "#fff" }} />
          </div>
          <span className="text">Continue with Apple</span>
        </Button>
        <Button>
          <span className="text">Continue with phone number</span>
        </Button>

        <hr style={{ margin: "1.5rem 0", border: "none", borderTop: "1px solid #333" }} />

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", textAlign: "left", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            Email or username
          </label>
          <PasswordInput
            type="email"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ display: "block", textAlign: "left", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            Password
          </label>
          <PasswordContainer>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ToggleIcon onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </ToggleIcon>
          </PasswordContainer>

          <Button color="#1DB954" textColor="#fff" type="submit">
            Log In
          </Button>
        </form>

        <FooterText>
          <Link to="#" style={{ color: "#1DB954", textDecoration: "none" }}>
            Forgot your password?
          </Link>
        </FooterText>

        <FooterText>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#1DB954", fontWeight: "bold", textDecoration: "none" }}>
            Sign up for Vibestream
          </Link>
        </FooterText>
      </LoginBox>

     {/* Footer */}
     <FooterContainer>
        <FooterText>
          This site is protected by reCAPTCHA and the Google{" "}
          <FooterLink href="#">Privacy Policy</FooterLink> and{" "}
          <FooterLink href="#">Terms of Service</FooterLink> apply.
        </FooterText>
      </FooterContainer>
    </LoginContainer>
  );
};

export default Login;