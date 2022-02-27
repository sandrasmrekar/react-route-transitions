import React from "react";
import { ArrowRight, ChevronLeft } from "react-feather";
import { NavLink } from "react-router-dom";
import Page from "../../components/Page";

export default function Projects() {
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
        <NavLink style={{ color: "#4D3BEF" }} to="/">
          <ChevronLeft size={50} strokeWidth={3} />
        </NavLink>
        <h1 style={{ color: "#4D3BEF" }}>Projects</h1>
      </div>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
        to="/projects/1"
      >
        <p>Project 1</p>
        <ArrowRight size={50} />
      </NavLink>
    </Page>
  );
}
