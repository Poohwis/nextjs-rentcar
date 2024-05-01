"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ButtonRollupProps {
  disabled: boolean;
  children: React.ReactNode;
}
export default function ButtonRollup({
  children,
  disabled,
}: ButtonRollupProps) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className={cn(
        "overflow-hidden relative bg-black flex items-center justify-center text-white pl-3 pr-2 py-2 rounded-full ",
        "text-base text-nowrap hover:cursor-pointer gap-x-2",
        disabled ? "opacity-20" : "opacity-100"
      )}
    >
      <div className="flex flex-col h-6 items-center overflow-clip">
        <motion.div
          transition={{ y: { duration: 0.5 } }}
          animate={{ y: hover && !disabled ? -24 : 0 }}
        >
          {children}
        </motion.div>
        <motion.div
          transition={{ y: { duration: 0.5 } }}
          animate={{ y: hover && !disabled ? -24 : 0 }}
        >
          {children}
        </motion.div>
      </div>
      <div
        className={cn(
          " overflow-hidden absolute right-3  rounded-full w-5 h-5 p-[1px] ",
          disabled ? "bg-gray-500" : "bg-accent"
        )}
      >
        <ArrowUpRight
          size={18}
          color="black"
          className={cn(
            "transition-transform absolute duration-500",
            hover && !disabled ? "translate-x-4 -translate-y-4" : ""
          )}
        />
        <ArrowUpRight
          size={18}
          color="black"
          className={cn(
            "transition-transform absolute -bottom-4 -left-4 duration-500",
            hover && !disabled ? "translate-x-4 -translate-y-4" : ""
          )}
        />
      </div>
    </motion.div>
  );
}
