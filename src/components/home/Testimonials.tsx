import React from "react";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.scss";

const TESTIMONIALS = [
  {
    quote:
      "I made ₦115,000 in my first month building Figma UI prototypes between lectures at UNILAG. Having the client deposit to escrow first gave me 100% confidence to deliver my best work.",
    name: "Amara Eze",
    role: "Product Designer • UNILAG",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AmaraEze&backgroundColor=c0aede",
  },
  {
    quote:
      "We needed a clean React landing page and a Python dataset cleaned in 72 hours. Found two brilliant 400L students on Capable. Zero back-and-forth friction, payment released on approval.",
    name: "Dr. Adebayo O.",
    role: "Founder • Apex Logistics Tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DrAdebayo&backgroundColor=b6e3f4",
  },
  {
    quote:
      "I traded my backend Node.js APIs for a math tutor in my department on Capable. We both leveled up our grades and built an app together. The reliability score system is genius.",
    name: "Chinedu Ikenna",
    role: "Student Builder • FUTO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChineduIkenna&backgroundColor=d1d4f9",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials_section}>
      <div className="container">
        <div className={styles.header}>
          <h2>
            Loved by Students & <span className="grad-orange">Fast-Moving Founders</span>
          </h2>
          <p>
            Real stories from campus builders earning on-demand and founders scaling their products.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={styles.testimonial_card}>
              <div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={15} fill="#FFAA00" stroke="#FFAA00" />
                  ))}
                </div>
                <p className={styles.quote}>“{t.quote}”</p>
              </div>

              <div className={styles.author}>
                <img src={t.avatar} alt={t.name} />
                <div>
                  <h5>{t.name}</h5>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
