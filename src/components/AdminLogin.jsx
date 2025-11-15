import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./app.css";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/admin-dashboard");
    } catch {
      setError("Invalid credentials");
    } finally { setLoading(false); }
  };

  return (
    <div className="login-page">
      <div className="floating-panel panel1"></div>
      <div className="floating-panel panel2"></div>

      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Admin Email"
          required
        />

        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
