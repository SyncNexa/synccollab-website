"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import Logo from "../ui/Logo";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Brand */}
          <Link href="/" className={styles.brand} onClick={() => setMobileMenuOpen(false)}>
            <Logo size={32} />
            <span>Capable</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.nav_links}>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#for-students">For Students</Link>
            <Link href="#for-clients">For Clients</Link>
            <Link href="#escrow">Milestone Escrow</Link>
            <Link href="#campuses">Campus Network</Link>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <Link
              href="https://synccollab-web.onrender.com/auth/login"
              className={styles.login_link}
            >
              Sign In
            </Link>
            <Link
              href="https://synccollab-web.onrender.com/app/explore"
              className={styles.launch_btn}
            >
              <span>Launch App</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobile_toggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobile_drawer} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.drawer_links}>
          <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link href="#for-students" onClick={() => setMobileMenuOpen(false)}>
            For Students & Creators
          </Link>
          <Link href="#for-clients" onClick={() => setMobileMenuOpen(false)}>
            For Businesses & Clients
          </Link>
          <Link href="#escrow" onClick={() => setMobileMenuOpen(false)}>
            Milestone Escrow Protection
          </Link>
          <Link href="#campuses" onClick={() => setMobileMenuOpen(false)}>
            Campus Network
          </Link>
        </div>

        <div className={styles.drawer_actions}>
          <Link
            href="https://synccollab-web.onrender.com/auth/login"
            className="btn-secondary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="https://synccollab-web.onrender.com/app/explore"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Launch Capable App</span>
            <Sparkles size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
