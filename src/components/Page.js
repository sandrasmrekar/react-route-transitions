import React from "react";

export default function Page({ children, color }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "bold",
        backgroundColor: color,
        color: "white",
      }}
    >
      {children}
    </div>
  );
}
