import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // To decode Google JWT
import { getConfig } from "./constants";

const App = () => {
  const { backend_url, google_client_id } = getConfig();
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
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <GoogleOAuthProvider clientId={google_client_id}>
      <div>
        <h1>Google Sign-In</h1>
        <h2>{google_client_id}</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
