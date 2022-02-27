import React from "react";
import { ChevronLeft } from "react-feather";
import { NavLink } from "react-router-dom";
import Page from "../../components/Page";

export default function Project1() {
  return (
    <Page color="white">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          maxWidth: "600px",
          color: "#4D3BEF",
        }}
      >
        <NavLink style={{ color: "#4D3BEF" }} to="/projects">
          <ChevronLeft size={50} strokeWidth={3} />
        </NavLink>
        <h1 style={{ color: "#4D3BEF" }}>Project 1</h1>
      </div>
      <h3 style={{ color: "#4D3BEF" }}>:)</h3>
    </Page>
  );
}
