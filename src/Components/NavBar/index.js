import React from "react";
import { withRouter } from "react-router-dom";
import { NavItem, Nav, NavLink } from "reactstrap";

const NavBar = () => (
  <Nav bg="primary" variant="dark" style={{ width: "100vh" }}>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/create">Create Post</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/register">Sign Up</NavLink>
    </NavItem>
  </Nav>
);

export default withRouter(NavBar);
