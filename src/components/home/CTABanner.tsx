import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./CTABanner.module.scss";

export default function CTABanner() {
  return (
    <section className={styles.cta_section}>
      <div className="container">
        <div className={styles.banner_box}>
          <div className={styles.glow} />

          <h2>
            Ready to Hire Proof or <span className="grad-purple">Earn On-Demand?</span>
          </h2>
          <p>
            Join thousands of student builders, campus freelance creators, and forward-thinking businesses across Nigeria.
          </p>

          <div className={styles.btn_group}>
            <Link
              href="https://synccollab-web.onrender.com/auth/signup"
              className="btn-primary"
            >
              <span>Create Free Account</span>
              <Sparkles size={16} />
            </Link>

            <Link
              href="https://synccollab-web.onrender.com/app/explore"
              className="btn-secondary"
            >
              <span>Explore Marketplace</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
