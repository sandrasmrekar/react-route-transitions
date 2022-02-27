import React from "react";

export default function Navigation({ children }) {
  return (
    <nav
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        padding: "15px 0",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
        background: "#f9f9f9",
        boxShadow: " 0 5px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </nav>
  );
}
