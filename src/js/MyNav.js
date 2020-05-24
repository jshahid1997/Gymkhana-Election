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
      <NavbarBrand className="ml-auto" href="/">
        Gymkhana Elections
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        {/* <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem> */}
        <NavItem>
          <Button tag={Link} to="/editDetails" color="secondary">
            Edit Details
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
