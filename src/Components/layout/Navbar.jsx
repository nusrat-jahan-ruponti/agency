import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/solid.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="bg-[#f3f6ff] dark:bg-gray-900 dark:text-white">
      <Container className="flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className=" dark:invert" />
          </div>
          <ul className="flex items-center gap-8 text-gray-700 text-gray-900 dark:text-white">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
