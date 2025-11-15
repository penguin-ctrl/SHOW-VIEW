import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ThankYou = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0c0d0e, #1a1b1e)",
    color: "#fff",
    fontFamily: '"Inter", sans-serif',
    padding: "20px",
    textAlign: "center",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "20px",
    padding: "40px 30px",
    boxShadow: "0 8px 40px rgba(0, 255, 255, 0.2)",
    maxWidth: "450px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#00ffe0",
    textShadow: "0 0 8px #00ffe0",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "1.1rem",
    color: "#cfd8dc",
    lineHeight: "1.6",
  };

  const homeBtnStyle = {
    background: "rgba(0, 255, 224, 0.15)",
    backdropFilter: "blur(10px)",
    color: "#00ffe0",
    padding: "16px",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0, 255, 224, 0.5)",
    border: "1px solid rgba(0, 255, 224, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const tooltipStyle = {
    position: "absolute",
    right: "70px",
    bottom: "50%",
    transform: "translateY(50%)",
    background: "rgba(0,0,0,0.8)",
    color: "#fff",
    fontSize: "0.875rem",
    padding: "5px 10px",
    borderRadius: "6px",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>🎉 Thank You!</h2>
        <p style={textStyle}>
          Your booking to Show View Hostels was successful. We'll reach out to you shortly.
        </p>
      </div>

      {/* Floating Home Button */}
      <div style={{ position: "fixed", bottom: "24px", right: "24px" }}>
        <Link to="/" style={{ position: "relative", display: "inline-block" }}>
          <button
            style={homeBtnStyle}
            onMouseEnter={(e) => {
              const tooltip = e.currentTarget.nextSibling;
              tooltip.style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              const tooltip = e.currentTarget.nextSibling;
              tooltip.style.opacity = 0;
            }}
          >
            <FaHome style={{ fontSize: "1.25rem" }} />
          </button>
          <div style={tooltipStyle}>Home</div>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
