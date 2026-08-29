import React from "react";
import { Search, ShieldCheck, Banknote } from "lucide-react";
import styles from "./HowItWorks.module.scss";

export default function HowItWorks() {
  return (
    <section className={styles.how_section}>
      <div className="container">
        <div className={styles.header}>
          <h2>
            How Deals Flow on <span className="grad-purple">Capable</span>
          </h2>
          <p>
            Zero friction, zero guesswork. How clients and student creators collaborate with complete peace of mind.
          </p>
        </div>

        <div className={styles.steps_grid}>
          {/* Step 1 */}
          <div className={styles.step_card}>
            <span className={styles.step_number}>01</span>
            <div className={`${styles.icon_circle} purple`}>
              <Search size={24} />
            </div>
            <h3>Discover or Post</h3>
            <p>
              Clients post micro-gigs with budget & deliverables. Students swipe through opportunities matching their skills or find peers for skill barter.
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.step_card}>
            <span className={styles.step_number}>02</span>
            <div className={`${styles.icon_circle} green`}>
              <ShieldCheck size={24} />
            </div>
            <h3>Fund Milestone Escrow</h3>
            <p>
              The client funds the agreed milestone via Paystack into secure escrow. Work begins knowing the money is 100% guaranteed upon deliverable review.
            </p>
          </div>

          {/* Step 3 */}
          <div className={styles.step_card}>
            <span className={styles.step_number}>03</span>
            <div className={`${styles.icon_circle} orange`}>
              <Banknote size={24} />
            </div>
            <h3>Approve & Instant Cashout</h3>
            <p>
              The student submits work in the Deal Room. The client approves with 1-click, and earnings land immediately in the student’s wallet for bank withdrawal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
