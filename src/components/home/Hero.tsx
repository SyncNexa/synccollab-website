import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, X, Flame, CheckCircle } from "lucide-react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          {/* Left Text Column */}
          <div className={styles.text_col}>
            <p className={styles.eyebrow}>
              <Sparkles size={15} className={styles.sparkle_icon} />
              <span>Campus Freelance & Peer Collabs in Nigeria</span>
            </p>

            <h1>
              Hire <span className={styles.highlight}>Proof</span>, Not Resumes. Earn On-Demand.
            </h1>

            <p>
              The verified marketplace connecting ambitious students, builders, and campus creators with real paid micro-gigs, peer skill bartering, and zero-risk milestone escrow protection.
            </p>

            <div className={styles.cta_group}>
              <Link
                href="https://synccollab-web.onrender.com/client/post-gig"
                className="btn-primary"
              >
                <span>Post a Micro-Gig</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="https://synccollab-web.onrender.com/app/explore"
                className="btn-secondary"
              >
                <span>Explore Campus Talent</span>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className={styles.trust_stats}>
              <div className={styles.stat_item}>
                <h3>100%</h3>
                <span>Escrow Funded</span>
              </div>
              <div className={styles.stat_item}>
                <h3>₦0</h3>
                <span>Upfront Risk</span>
              </div>
              <div className={styles.stat_item}>
                <h3>8+</h3>
                <span>Universities</span>
              </div>
              <div className={styles.stat_item}>
                <h3>3-Day</h3>
                <span>Avg. Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Interactive Card Stack Preview) */}
          <div className={styles.visual_col}>
            <div className={styles.mock_deck}>
              {/* Back Card in stack */}
              <div className={styles.mock_card_back} />

              {/* Active Front Card */}
              <div className={styles.mock_card_front}>
                <div className={styles.card_cover}>
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80"
                    alt="Campus UI Project"
                  />
                  <span className={styles.budget_pill}>₦45,000</span>
                  <span className={styles.delivery_pill}>
                    <Zap size={11} color="#FFAA00" /> 3d Delivery
                  </span>
                </div>

                <div className={styles.card_info}>
                  <div className={styles.title_row}>
                    <h4>Design Mobile UI for Delivery App</h4>
                    <CheckCircle size={15} color="#00DE73" />
                  </div>
                  <small>Apex Campus Logistics • FUTO Owerri</small>
                  <p>Figma prototype needed for campus package delivery app before pilot launch.</p>
                  <div className={styles.skills}>
                    Skills: <span>Figma | UI/UX | Mobile Design</span>
                  </div>
                </div>

                <div className={styles.mock_actions}>
                  <div className={styles.mock_btn} title="Pass">
                    <X size={18} color="#FF4D4D" />
                  </div>
                  <div className={styles.mock_btn} title="Apply">
                    <Flame size={18} color="#FF6200" />
                  </div>
                </div>
              </div>

              {/* Floating Escrow Badge */}
              <div className={styles.floating_escrow_badge}>
                <div className={styles.escrow_icon_wrap}>
                  <ShieldCheck size={18} />
                </div>
                <div className={styles.escrow_text}>
                  <h5>₦45,000 in Escrow</h5>
                  <span>Verified & Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
