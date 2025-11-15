import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

// ✅ List of allowed admin email(s)
const allowedAdminEmails = ["eliasmusambai@gmail.com", "dionysiusfranco58@gmail.com"];

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Verifying access...
      </div>
    );
  }

  if (user && allowedAdminEmails.includes(user.email)) {
    return children;
  }

  return <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;
