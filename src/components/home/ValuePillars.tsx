import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Wallet, Sparkles, Shield, Repeat, Users, FileCheck } from "lucide-react";
import styles from "./ValuePillars.module.scss";

export default function ValuePillars() {
  return (
    <section className={styles.pillars_section} id="for-students">
      <div className="container">
        <div className={styles.header}>
          <h2>
            A Two-Way Engine for <span className="grad-purple">Campus Success</span>
          </h2>
          <p>
            Whether you want to turn your technical skills into cash or hire top campus talent without agency fees, Capable delivers verified results.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: For Students */}
          <div className={styles.pillar_card}>
            <div>
              <div className={styles.card_head}>
                <span className={`${styles.audience_label} purple`}>For Students & Builders</span>
                <h3>
                  Monetize Skills & Build <span className="grad-purple">Verified Proof</span>
                </h3>
                <p>
                  Ditch unpaid promises and inflated CVs. Build a living portfolio backed by real client ratings, barter skills with peers, and get paid directly to your Nigerian bank account.
                </p>
              </div>

              <ul className={styles.feature_list}>
                <li>
                  <div className={styles.icon_wrap}>
                    <CheckCircle2 size={18} color="#AA00FF" />
                  </div>
                  <span><strong>100% Guaranteed Payouts:</strong> Every gig is funded into milestone escrow before you start writing code or designing.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <Repeat size={18} color="#AA00FF" />
                  </div>
                  <span><strong>Peer Skill Bartering:</strong> Trade frontend help for calculus tutoring, or video editing for backend APIs with fellow students.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <Wallet size={18} color="#AA00FF" />
                  </div>
                  <span><strong>Instant Wallet Cashout:</strong> Withdraw your earnings directly into any Nigerian commercial bank account in seconds.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <Sparkles size={18} color="#AA00FF" />
                  </div>
                  <span><strong>Proof Over Resumes:</strong> Verified deliverables live in your Capable profile, making you stand out to top recruiters.</span>
                </li>
              </ul>
            </div>

            <Link
              href="https://synccollab-web.onrender.com/app/explore"
              className="btn-primary"
            >
              <span>Start Earning On-Demand</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: For Clients & Startups */}
          <div className={`${styles.pillar_card} ${styles.dark}`} id="for-clients">
            <div>
              <div className={styles.card_head}>
                <span className={`${styles.audience_label} green`}>For Businesses & Startups</span>
                <h3>
                  Hire Top Campus Builders with <span className="grad-green">Zero Ghosting</span>
                </h3>
                <p>
                  Access hungry, top-tier student developers, designers, and creators from Nigeria’s elite universities with full milestone escrow protection.
                </p>
              </div>

              <ul className={styles.feature_list}>
                <li>
                  <div className={styles.icon_wrap}>
                    <Shield size={18} color="#00DE73" />
                  </div>
                  <span><strong>Zero Financial Risk:</strong> Funds remain securely held in escrow until you personally inspect and approve the submitted deliverables.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <Users size={18} color="#00DE73" />
                  </div>
                  <span><strong>Campus Verified Talent:</strong> Hire students from UNILAG, FUTO, UI, OAU, Covenant, and more with verified reliability scores.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <FileCheck size={18} color="#00DE73" />
                  </div>
                  <span><strong>Micro-Gig Precision:</strong> Need a 5-screen Figma prototype or 500-row Python data clean? Get it completed in 2–4 days.</span>
                </li>
                <li>
                  <div className={styles.icon_wrap}>
                    <CheckCircle2 size={18} color="#00DE73" />
                  </div>
                  <span><strong>In-App Deal Rooms:</strong> Chat, review milestone progress, test deliverables, and release funds with a single click.</span>
                </li>
              </ul>
            </div>

            <Link
              href="https://synccollab-web.onrender.com/client/post-gig"
              className="btn-green"
            >
              <span>Post a Micro-Gig Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
