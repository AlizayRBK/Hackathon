import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "buyer") {
      navigate("/buyer-dashboard");
    } else if (role === "farmer") {
      navigate("/farmer-dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login Page</h1>
      <p>Select your role to continue:</p>
      <div>
        <button style={styles.button} onClick={() => handleLogin("buyer")}>
          Login as Buyer
        </button>
        <button style={styles.button} onClick={() => handleLogin("farmer")}>
          Login as Farmer
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LoginPage;
