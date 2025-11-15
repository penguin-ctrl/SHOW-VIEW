import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Booking from "./components/Booking";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Support from "./components/Support";
import ThankYou from "./components/ThankYou";

const adminEmails = ["eliasmusambai@gmail.com", "dionysiusfranco58@gmail.com"];
function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">

        {/* Navigation */}
        <Navbar bg="light" expand="lg" className="mb-3 shadow-sm sticky-top">
          <Container>
            <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "#080808ff" }}>
              Show View Hostels
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                {/* <Nav.Link as={Link} to="/booking" className="nav-link-custom">Make Booking</Nav.Link> */}
                <Nav.Link as={Link} to="/admin" className="nav-link-custom">Admin</Nav.Link>
                <Nav.Link as={Link} to="/admin-login" className="nav-link-custom">Admin Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin-login"
            element={<AdminLogin adminEmails={adminEmails} onLogin={setUser} />}
          />
          <Route
            path="/dashboard"
            element={user ? <AdminDashboard user={user} /> : <Navigate to="/admin-login" />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  // Add a simple fade-in animation
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div style={{ position: "relative", color: "#fff" }}>
      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          height: "80vh",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images.jpg/Front.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)", // Dark overlay
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "5%",
            paddingRight: "5%",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1.2s ease-in-out",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Where Comfort Meets Affordability
          </h1>
          <p style={{ fontSize: "1.3rem", marginTop: "15px", lineHeight: "1.6" }}>
            ✨ Discover comfort at Show View Hostel! Designed for students who value safety, serenity, and affordability.
          </p>
          <Link
            to="/booking"
            style={{
              marginTop: "25px",
              padding: "12px 25px",
              backgroundColor: "#ffcc00",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "5px",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Marketing Section */}
      <Container style={{ marginTop: "40px" }}>
        <h2 className="text-warning mb-4">Why Choose Show View Hostels?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          {/* Image 1 */}
          <MarketingCard
            img="Front.jpg"
            title="Safe Entry & Security"
            text="Our main entrance features strong metallic security doors and a clearly visible hostel sign.
             Students enjoy a safe, controlled entry point that sets the tone for reliability and peace of mind."
          />
          {/* Image 2 */}
          <MarketingCard
            img="Behind.jpg"
            title="Peaceful Walkways"
            text="The side view reveals a calm walkway surrounded by greenery, ensuring a peaceful
             and refreshing atmosphere. Large windows provide natural lighting and proper room ventilation."
          />
          {/* Image 3 */}
          <MarketingCard
            img="Water.jpg"
            title="Reliable Water Supply"
            text="Our elevated water tank system guarantees a consistent supply of clean water.
             The structure showcases durability and a focus on uninterrupted daily living for all residents."
          />
          {/* Image 4 */}
          <MarketingCard
            img="Side.jpg"
            title="Spacious Green Compound"
            text="The back compound is a spacious, green environment fully secured with a perimeter fence.
             It allows students to relax, socialize, and enjoy fresh air in a safe and serene outdoor space. "/>
          {/* image 5 */}
           <MarketingCard
            img="Inside.jpg"
            title="Entertainment"
            text="Football lovers..EPL is back and you can't be left with match fixtures as we
             got you covered with our dstv active and our strong internet access through WiFi 
             networks and proxies available at a cost."
          />
          <MarketingCard
            img="Pool.jpg"
            title="Entertainment"
            text="Nothing energizes the common room like a good game. Players gather, spectators hype the shots,
             and strangers turn into friends over a single match. The pool table transforms downtime into 
             something people genuinely look forward to."
          />

          {/* image 6 */}
           <MarketingCard
            img="Inside2.jpg"
            title="Spacious Green Compound"
            text="The back compound is a spacious, green environment fully secured with a perimeter fence.
             It allows students to relax, socialize, and enjoy fresh air in a safe and serene outdoor space."
          />
          {/* image 7 */}
           <MarketingCard
            img="Front.jpg"
            title="Spacious Green Compound"
            text="The back compound is a spacious, green environment fully secured with a perimeter fence.
             It allows students to relax, socialize, and enjoy fresh air in a safe and serene outdoor space."
          />

        </div>

        {/* Support Section */}
        <div style={{ marginTop: "50px" }}>
          <Support />
        </div>
      </Container>
    </div>
  );
}

// Marketing Card Component
function MarketingCard({ img, title, text }) {
  return (
    <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
      <img
        src={`${process.env.PUBLIC_URL}/images.jpg/${img}`}
        alt={title}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h4 style={{ color: "#ffcc00", marginTop: "15px" }}>{title}</h4>
      <p style={{ marginTop: "10px", lineHeight: "1.5" }}>{text}</p>
    </div>
  );
}

// Hover effect for navbar
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `.nav-link-custom { color:#080808ff; font-weight:700; transition:0.3s; }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `.nav-link-custom:hover { color:#ffcc00; transform:scale(1.05); }`,
  styleSheet.cssRules.length
);

export default App;
