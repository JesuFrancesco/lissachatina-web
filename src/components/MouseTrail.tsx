import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseTrail() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 700, damping: 50 });
  const smoothY = useSpring(mouseY, { stiffness: 700, damping: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="bg-primary/55 backdrop-blur-lg shadow-2xl"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: smoothX,
        y: smoothY,
        width: 40,
        height: 40,
        borderRadius: "50%",
        // background: "rgba(255,255,255,0.8)",
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
      }}
    />
  );
}
