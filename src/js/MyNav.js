import React from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand className="mr-auto" href="/">
        Gymkhana Elections
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/request">
            Request Candidature
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/editDetails">
            Edit Details
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
