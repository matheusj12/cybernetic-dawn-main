

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary";
}

export const GlowCard = ({
  children,
  className,
  glowColor = "primary",
}: GlowCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative group rounded-2xl overflow-hidden",
        className
      )}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl",
          glowColor === "primary" ? "bg-primary" : "bg-secondary"
        )}
      />

      {/* Content */}
      <div className="relative glass-strong rounded-2xl p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
