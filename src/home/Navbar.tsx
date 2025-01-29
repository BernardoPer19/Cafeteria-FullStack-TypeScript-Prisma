import React, { useState } from "react";
import Link from "next/link";
import CartContainer from "@/components/Cart/CartContainer";
import NavBarSuperior from "./NavBarSuperior";
import NavBarInferior from "./NavBarInferior";

const Navbar = async () => {
  return (
    <>
      <NavBarSuperior />

      <CartContainer />
      <NavBarInferior />
    </>
  );
};

export default Navbar;
