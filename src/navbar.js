import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export const NavbarComponent = () => {
  return (
    <div>
      <Navbar light expand="fixed-top">
        <NavbarBrand href="/" className="pl-5">
          <b>Code</b> Inside You.{" "}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};
