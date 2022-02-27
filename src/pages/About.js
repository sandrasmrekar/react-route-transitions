import React from "react";
import { ArrowRight, ChevronLeft } from "react-feather";
import { NavLink } from "react-router-dom";
import Page from "../components/Page";

export default function About() {
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

        <h1 style={{ flex: 1 }}>About</h1>
      </div>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
        to="/about/me"
      >
        <p>About Me</p>
        <ArrowRight size={50} />
      </NavLink>
    </Page>
  );
}
