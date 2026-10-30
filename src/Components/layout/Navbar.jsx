import React, { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/solid.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Services", to: "/services" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-[#f3f6ff] dark:bg-gray-900 dark:text-white">
      <Container className="flex h-[72px] items-center justify-between">
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-auto dark:invert" />
          </Link>

          <ul className="hidden items-center gap-8 text-gray-900 dark:text-white md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link to="/contact" className="hidden md:block">
            <Button>Contact us</Button>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-3xl text-gray-900 dark:text-white md:hidden"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="absolute left-0 top-[72px] z-50 w-full bg-[#f3f6ff] shadow-lg dark:bg-gray-900 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-gray-900 dark:text-white">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full">Contact us</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;