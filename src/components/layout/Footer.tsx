import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Logo from "../ui/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand Col */}
          <div className={styles.brand_col}>
            <div className={styles.brand_row}>
              <Logo size={32} />
              <span>Capable</span>
            </div>
            <p>
              Hire Proof, Not Resumes. The trusted marketplace for campus micro-gigs, peer collaborations, and milestone-backed escrow payouts.
            </p>
            <div className={styles.badge_pill}>
              <ShieldCheck size={14} />
              <span>₦ Escrow Guarantee Protected</span>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div className={styles.col}>
            <h4>Platform</h4>
            <ul>
              <li>
                <Link href="#how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="https://synccollab-web.onrender.com/app/explore">Browse Gigs</Link>
              </li>
              <li>
                <Link href="https://synccollab-web.onrender.com/app/explore">Peer Collabs</Link>
              </li>
              <li>
                <Link href="https://synccollab-web.onrender.com/client/post-gig">Post a Gig</Link>
              </li>
              <li>
                <Link href="https://synccollab-web.onrender.com/app/leaderboard">Leaderboard</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className={styles.col}>
            <h4>Solutions</h4>
            <ul>
              <li>
                <Link href="#for-students">For Students</Link>
              </li>
              <li>
                <Link href="#for-clients">For Businesses</Link>
              </li>
              <li>
                <Link href="#escrow">Milestone Escrow</Link>
              </li>
              <li>
                <Link href="#for-students">Skill Bartering</Link>
              </li>
              <li>
                <Link href="#campuses">Campus Ambassadors</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campuses */}
          <div className={styles.col}>
            <h4>Campuses</h4>
            <ul>
              <li>
                <Link href="#campuses">UNILAG (Lagos)</Link>
              </li>
              <li>
                <Link href="#campuses">FUTO (Owerri)</Link>
              </li>
              <li>
                <Link href="#campuses">UI (Ibadan)</Link>
              </li>
              <li>
                <Link href="#campuses">OAU (Ife)</Link>
              </li>
              <li>
                <Link href="#campuses">UNN (Nsukka)</Link>
              </li>
              <li>
                <Link href="#campuses">Covenant University</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div className={styles.col}>
            <h4>Trust & Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/escrow-policy">Escrow Protection Rules</Link>
              </li>
              <li>
                <Link href="/dispute">Dispute Resolution</Link>
              </li>
              <li>
                <Link href="/contact">Support & Help</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Capable Technologies. All rights reserved.</p>
          <div className={styles.socials}>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
