import React from "react";
import { Lock, RefreshCw, CheckCircle2 } from "lucide-react";
import styles from "./EscrowSecurity.module.scss";

export default function EscrowSecurity() {
  return (
    <section className={styles.escrow_section} id="escrow">
      <div className="container">
        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.text_col}>
            <h2>
              Milestone Escrow That <span className="grad-green">Protects Everyone</span>
            </h2>
            <p>
              Traditional freelancing in Nigeria suffers from two fatal problems: clients ghost after receiving work, or freelancers vanish after getting paid. Capable eliminates both with automated milestone escrow.
            </p>

            <div className={styles.guarantee_points}>
              <div className={styles.point}>
                <div className={styles.icon_box}>
                  <Lock size={20} />
                </div>
                <div>
                  <h4>Pre-Funded Milestone Security</h4>
                  <span>Clients deposit the agreed amount before work starts. Students know the money is safe and guaranteed.</span>
                </div>
              </div>

              <div className={styles.point}>
                <div className={styles.icon_box}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4>Deliverables Inspection Before Release</h4>
                  <span>Clients review the prototype, code repo, or designs before funds leave escrow into the student’s balance.</span>
                </div>
              </div>

              <div className={styles.point}>
                <div className={styles.icon_box}>
                  <RefreshCw size={20} />
                </div>
                <div>
                  <h4>Fair Dispute Resolution</h4>
                  <span>In the rare case of unfulfilled requirements, our automated arbitration process ensures 100% fair refunds or revisions.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Escrow Breakdown Card) */}
          <div className={styles.card_col}>
            <div className={styles.card_header}>
              <h3>Active Deal Escrow Audit</h3>
              <span className={styles.status_badge}>100% Funded</span>
            </div>

            <div className={styles.milestone_flow}>
              <div className={styles.flow_item}>
                <div className={styles.left}>
                  <div className={`${styles.circle} ${styles.active}`}>✓</div>
                  <span>1. Client Milestone Funded</span>
                </div>
                <span className={styles.amount}>₦50,000</span>
              </div>

              <div className={styles.flow_item}>
                <div className={styles.left}>
                  <div className={`${styles.circle} ${styles.active}`}>✓</div>
                  <span>2. Deliverables Submitted for Review</span>
                </div>
                <span className={styles.amount}>In Progress</span>
              </div>

              <div className={styles.flow_item}>
                <div className={styles.left}>
                  <div className={styles.circle}>3</div>
                  <span>3. Instant Bank Wallet Release</span>
                </div>
                <span className={styles.amount}>₦45,000 (90%)</span>
              </div>
            </div>

            <div className={styles.paystack_row}>
              <span>Powered by Secure Bank Gateway</span>
              <span className={styles.brand_tag}>Paystack 256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
