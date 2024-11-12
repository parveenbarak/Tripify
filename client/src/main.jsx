import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = "pk_test_aG9seS1qYWd1YXItMzAuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" />
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/auth">
        <App />
      </ClerkProvider>
    </Router>
  </StrictMode>
);
