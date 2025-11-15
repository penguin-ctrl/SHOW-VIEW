// src/components/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase"; // make sure you export auth & db from firebase.js
import "./app.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch bookings from Firestore
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const data = querySnapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        }));
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    loadBookings();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin-login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Delete a booking
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Failed to delete booking:", err);
    }
  };

  if (loading) return <p className="loading-text">Loading bookings...</p>;

  return (
    <div className="dashboard-page">
      <div className="floating-panel dash-panel1"></div>
      <div className="floating-panel dash-panel2"></div>

      <div className="dashboard-card">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <ul className="booking-list">
            {bookings.map((b) => (
              <li key={b.id} className="booking-item">
                <span className="booking-name">{b.name}</span> -{" "}
                <span className="booking-room">{b.room}</span>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(b.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
