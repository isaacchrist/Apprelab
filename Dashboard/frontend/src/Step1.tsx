// src/pages/Step1Dashboard.tsx
import React from "react";
import dashboardImage from "../assets/dashboard-image.png"; // replace with your image path

const Step1Dashboard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#1E40AF", // Tailwind's blue-800 equivalent
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={dashboardImage}
        alt="Dashboard"
        style={{
          maxWidth: "80%",
          maxHeight: "80%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Step1Dashboard;
