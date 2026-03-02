"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "होम" },
  {
    label: "सेवाएँ",
    dropdown: [
      { href: "#offset-printing", label: "ऑफसेट प्रिंटिंग" },
      { href: "#flex-banner", label: "फ्लेक्स / बैनर" },
      { href: "#digital-printing", label: "डिजिटल प्रिंटिंग" },
      { href: "#id-card", label: "आई-कार्ड" },
      { href: "#photocopy-scan", label: "फोटोकॉपी / स्कैनिंग" },
      { href: "#graphic-design", label: "ग्राफिक डिज़ाइन" },
    ],
  },
  { href: "#products", label: "उत्पाद" },
  { href: "#order", label: "ऑर्डर करें" },
  { href: "#contact", label: "संपर्क करें" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      style={{
        background: "#1a1a2e",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Link
        href="#home"
        style={{
          color: "#ff6b00",
          fontWeight: 700,
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
      >
        नरेंद्र कंप्यूटर्स
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <li
              key={link.label}
              className="has-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {link.label} ▾
              </button>
              {dropdownOpen && (
                <ul className="dropdown">
                  {link.dropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>

      <style>{`
        .hamburger { display: none; background: none; border: none; color: #f0ebe0; font-size: 1.5rem; cursor: pointer; }
        .nav-links { display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0; align-items: center; }
        .nav-links a, .dropdown-toggle { color: #f0ebe0; text-decoration: none; background: none; border: none; cursor: pointer; font-size: 1rem; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: all 0.2s; }
        .nav-links a:hover, .dropdown-toggle:hover { color: #ff6b00; border-bottom: 2px solid #ff6b00; }
       .has-dropdown { position: relative; display: flex; align-items: center; }
        .dropdown { position: absolute; top: 100%; left: 0; background: #1a1a2e; border: 1px solid #ff6b0044; border-radius: 6px; list-style: none; padding: 0.5rem 0; min-width: 180px; box-shadow: 0 8px 24px #0008; z-index: 999; }
        .dropdown li a { display: block; padding: 0.5rem 1rem; border-bottom: none; white-space: nowrap; }
        .dropdown li a:hover { background: #ff6b0022; color: #ff6b00; }
        @media (max-width: 768px) {
          .hamburger { display: block; }
          .nav-links { display: none; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: #1a1a2e; padding: 1rem 2rem; gap: 1rem; align-items: flex-start; }
          .nav-links.open { display: flex; }
          .dropdown { position: static; border: none; box-shadow: none; padding-left: 1rem; }
        }
      `}</style>
    </nav>
  );
}
