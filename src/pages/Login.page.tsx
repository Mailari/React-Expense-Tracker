import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // To decode Google JWT
import "./index.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomComponents/Button";
import TextInput from "../components/CustomComponents/TextInput";
import { getConfig } from "../constants";

function Login() {
  const { backend_url, google_client_id } = getConfig();
  const navigate = useNavigate();

  console.log({ backend_url, google_client_id });

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const user = jwtDecode(token);

    // Send this token to your backend for further processing
    fetch(backend_url + "/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User authenticated:", data);
        localStorage.setItem("authToken", data.jwtToken);
        navigate("/");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="auth_container custom_box">
      <h3 style={{ textAlign: "left" }}>Login with your account </h3>
      <TextInput type="text" placeholder="Email" />
      <TextInput type="text" placeholder="Password" />
      <br />
      <CustomButton name={"Login"} />
      <br />
      <div className="login_choices">
        <div className="login_choice">
          <GoogleOAuthProvider clientId={google_client_id}>
            <div>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>
        </div>
        <div className="login_choice padded_box_x" style={{ fontSize: "28px" }}>
          LinkedIn
        </div>
      </div>
    </div>
  );
}

export default Login;
