"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Flame, X, Check, Send } from "lucide-react";
import styles from "./InteractiveShowcase.module.scss";

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"swiper" | "dealroom">("swiper");

  return (
    <section className={styles.showcase_section} id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <h2>
            Experience Capable in <span className="grad-purple">Action</span>
          </h2>
          <p>
            From rapid card discovery to real-time milestone escrow deal rooms, see how deals happen seamlessly.
          </p>
        </div>

        {/* Tab Controls */}
        <div className={styles.tab_controls}>
          <button
            className={`${styles.tab_btn} ${activeTab === "swiper" ? styles.active : ""}`}
            onClick={() => setActiveTab("swiper")}
          >
            1. Opportunity Swiper
          </button>
          <button
            className={`${styles.tab_btn} ${activeTab === "dealroom" ? styles.active : ""}`}
            onClick={() => setActiveTab("dealroom")}
          >
            2. Live Escrow Deal Room
          </button>
        </div>

        {/* Display Window */}
        <div className={styles.display_window}>
          {/* Visual Container */}
          <div className={styles.demo_visual}>
            {activeTab === "swiper" ? (
              <div className={styles.deck_frame}>
                <div className={styles.card_layer_2} />
                <div className={styles.card_layer_1} />
                <div className={styles.card_active}>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80"
                    alt="React dev card"
                  />
                  <div className={styles.meta}>
                    <h4>Build Responsive React Landing Page</h4>
                    <small>HostelHub NG • Covenant University</small>
                    <p>Figma prepared. Need clean TypeScript & Tailwind waitlist landing page.</p>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.btn}><X size={16} color="#FF4D4D" /></div>
                    <div className={styles.btn}><Flame size={16} color="#FF6200" /></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.deal_room_frame}>
                <div className={styles.room_header}>
                  <div className={styles.partner}>
                    <div>
                      <h4>Apex Campus Logistics</h4>
                      <small>FUTO • 4.9 ★ Client</small>
                    </div>
                  </div>
                  <ShieldCheck size={18} color="#00DE73" />
                </div>

                <div className={styles.escrow_banner}>
                  <div className={styles.top_row}>
                    <span>₦45,000 Milestone Funded</span>
                    <CheckCircle2 size={14} color="#00DE73" />
                  </div>
                  <p>Funds locked securely in Paystack escrow account.</p>
                </div>

                <div className={styles.chat_stream}>
                  <div className={`${styles.msg} ${styles.in}`}>
                    Hey David, milestone funded! Please share the Figma interactive link when ready.
                  </div>
                  <div className={`${styles.msg} ${styles.out}`}>
                    Hi! 5 high-fidelity screens completed. Submitting prototype link now!
                  </div>
                </div>

                <div className={styles.room_actions}>
                  <button className={styles.submit}><Send size={12} /> Submit Work</button>
                  <button className={styles.approve}><Check size={12} /> Approve & Pay</button>
                </div>
              </div>
            )}
          </div>

          {/* Description Container */}
          <div className={styles.demo_desc}>
            {activeTab === "swiper" ? (
              <>
                <h3>
                  Swipe Through Gigs & <span className="grad-orange">Peer Collaborators</span>
                </h3>
                <p>
                  Browse curated student jobs and peer profiles tailored to your skills and campus. Filter by Tech, Creative, Teaching, or Business with instant 1-tap applications.
                </p>
                <div className={styles.highlights}>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#AA00FF" />
                    <span>Real-time budget & delivery estimates on every card</span>
                  </div>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#AA00FF" />
                    <span>Swipe right to fire an instant proposal note</span>
                  </div>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#AA00FF" />
                    <span>View peer reliability scores (e.g. 98% On-Time)</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3>
                  Real-Time Milestone <span className="grad-green">Escrow Deal Room</span>
                </h3>
                <p>
                  No messy email threads or unpaid WhatsApp screenshots. Every active deal happens inside a dedicated Deal Room with live milestone status and one-click fund release.
                </p>
                <div className={styles.highlights}>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#00DE73" />
                    <span>Milestone funds verified before work commences</span>
                  </div>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#00DE73" />
                    <span>Submit deliverables with GitHub links or file uploads</span>
                  </div>
                  <div className={styles.hl_item}>
                    <CheckCircle2 size={16} color="#00DE73" />
                    <span>Instant automatic credit to student Capable wallet</span>
                  </div>
                </div>
              </>
            )}

            <Link
              href="https://synccollab-web.onrender.com/app/explore"
              className="btn-primary"
            >
              <span>Test Live App</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
