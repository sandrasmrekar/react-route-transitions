import React from "react";
import { NavLink } from "react-router-dom";
import Page from "../components/Page";
import { ArrowRight } from "react-feather";

export default function Home() {
  return (
    <Page color="#4D3BEF">
      <h1 style={{ color: "white" }}>Home</h1>
      <NavLink
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
        to="/About"
      >
        <p>About</p>

        <ArrowRight size={50} />
      </NavLink>

      <NavLink
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
        to="/projects"
      >
        <p>Projects</p>

        <ArrowRight size={50} />
      </NavLink>
    </Page>
  );
}
