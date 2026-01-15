import "@/App.css";
import { motion } from "framer-motion";
import Hero from "@components/Hero";
import ImageCarousel from "@components/ImageCarousel";
import CTA from "@/components/CTA";
import MouseTrail from "@/components/MouseTrail";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Hero */}
        <motion.div
          variants={sectionVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Hero />
        </motion.div>
        {/* Carousel */}
        <motion.div
          variants={sectionVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ImageCarousel />
        </motion.div>
        {/* CTA */}
        <motion.div
          variants={sectionVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTA />
        </motion.div>
      </div>
      <MouseTrail />
    </>
  );
}

export default HomePage;
