import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #000;
  color: #fff;
`;

const SignupBox = styled.div`
  width: 500px;
  background: #121212;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 3rem auto;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #b3b3b3;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
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

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #333;
  }

  &::before {
    margin-right: 0.5rem;
  }

  &::after {
    margin-left: 0.5rem;
  }
`;

const SocialButton = styled(Button)`
  background: #000;
  border: 1px solid #6d6d6d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    border: 1px solid #fff;
  }
`;

const FooterText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #b3b3b3;
    padding: 1rem 0;

  line-height: 1.5; /* Add spacing between lines for readability */

  a {
    color: #1db954;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterContainer = styled.div`
  background-color: #121212;
  padding: 1rem;
  width: 100%;
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center;
`;

const FooterLink = styled.a`
  color: #1db954;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
  };

  return (
    <SignupContainer>
      <SignupBox>
        <Title>Sign up to start listening</Title>
        <Subtitle>Discover your favorite music, podcasts, and more.</Subtitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Link
            to="/signup-phone"
            style={{ color: "#1db954", fontSize: "0.9rem", display: "block", marginBottom: "1rem" }}
          >
            Use phone number instead
          </Link>
          <Button type="submit">Next</Button>
        </form>

        <Divider>or</Divider>

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

        <FooterText>
          Already have an account?{" "}
          <Link to="/login">Log in here</Link>.
        </FooterText>
      </SignupBox>

      <FooterContainer>
        <FooterText>
          This site is protected by reCAPTCHA and the Google{" "}
          <FooterLink href="#">Privacy Policy</FooterLink> and{" "}
          <FooterLink href="#">Terms of Service</FooterLink> apply.
        </FooterText>
      </FooterContainer>
    </SignupContainer>
  );
};

export default Signup;