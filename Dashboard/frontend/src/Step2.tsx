
import React from "react";
import backgroundImage from "../assets/step2-bg.png"; 

const Step2Dashboard: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Bottom-left text */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 500,
        }}
      >
        Welcome to Step 2
      </div>

      {/* Bottom-right button */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563EB", // blue
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Dashboard;
