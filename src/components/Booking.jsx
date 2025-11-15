import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import Header from "./Header";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    room: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      // Save booking to Firebase
      await addDoc(collection(db, "bookings"), form);

      // Send email via EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("Booking sent successfully!");
      setForm({ name: "", email: "", room: "" });

      // Wait and redirect to thank you page
      setTimeout(() => {
        navigate("/thank-you"); // 👈 Redirects to your beautifully styled ThankYou component
      }, 2000);
    } catch (err) {
      console.error("Booking error:", err);
      setStatus("Failed to send booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Book a Room</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <select
            name="room"
            value={form.room}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Room Type</option>
            <option>Single Room</option>
            <option>Double Room</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white px-4 py-2 rounded ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending...
              </div>
            ) : (
              "Submit Booking"
            )}
          </button>

          {status && <p className="text-sm mt-2 text-center">{status}</p>}
        </form>
      </div>
    </>
  );
};

export default Booking;
