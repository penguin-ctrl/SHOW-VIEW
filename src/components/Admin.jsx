import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../components/app.css";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (!adminEmails.includes(email)) {
        alert("You are not an admin!");
        return;
      }

      onLogin(userCredential.user);

    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div className="page-wrap" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      {/* Floating Panels */}
      <div className="floating" style={{ width: "160px", height: "160px", top: "12%", left: "20%" }}></div>
      <div className="floating" style={{ width: "200px", height: "200px", bottom: "10%", right: "15%" }}></div>

      <form onSubmit={handleLogin} className="glass-card" style={{ width: "100%", maxWidth: "380px", zIndex: 5 }}>
        
        <h2 style={{ textAlign: "center", fontWeight: "700", color: "#fff", marginBottom: "10px" }}>
          Admin Login
        </h2>

        <label style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
          Email
        </label>
        <input
          type="email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginTop: "20px" }}>
          Password
        </label>
        <input
          type="password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit" className="btn-primary" style={{ marginTop: "25px" }}>
          Login
        </button>
      </form>

    </div>
  );
}

export default AdminLogin;
