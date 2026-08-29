import React from "react";
import styles from "./CampusTicker.module.scss";

const CAMPUSES = [
  { name: "University of Lagos", abbr: "UNILAG" },
  { name: "FUTO Owerri", abbr: "FUTO" },
  { name: "University of Ibadan", abbr: "UI" },
  { name: "Obafemi Awolowo Univ.", abbr: "OAU" },
  { name: "Univ. of Nigeria Nsukka", abbr: "UNN" },
  { name: "Covenant University", abbr: "CU" },
  { name: "Ahmadu Bello Univ.", abbr: "ABU" },
  { name: "FUTA Akure", abbr: "FUTA" },
];

export default function CampusTicker() {
  return (
    <section className={styles.ticker_section} id="campuses">
      <div className="container">
        <h4 className={styles.heading}>Verified Student Creators & Talent Across Top Campuses</h4>
        <div className={styles.ticker_wrap}>
          {CAMPUSES.map((c, i) => (
            <div key={i} className={styles.campus_badge}>
              <span className={styles.dot} />
              <span>{c.abbr} • {c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
