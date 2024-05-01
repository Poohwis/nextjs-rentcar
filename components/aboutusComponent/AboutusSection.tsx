"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import womenDrivingTesla from "@/public/drivingtesla.jpg";
import manDriving from "@/public/manridingcar.jpg";
import { useRef } from "react";

export default function AboutusSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 10,
    mass: 0.1,
  });

  const y = useTransform(smoothY, [0, 1], [-50, 20]);

  return (
    <div
      id="about"
      className="w-full
     flex justify-center  pt-10 pb-20 bg-gradient-to-b from-white to-[#404040]"
    >
      <div className="w-full max-w-5xl bg-primary rounded-3xl px-4 sm:py-6 py-10">
        <div className="text-accent font-bold text-2xl text-start ml-2">
          What we do...
        </div>
        <div ref={ref} className="flex flex-col px-4 gap-y-10 mt-4">
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 sm:items-center flex flex-col gap-y-2">
            <p className="text-[13px] sm:indent-4 indent-2 text-white/80">
              We&apos;re passionate about making car rentals easier, more affordable,
              and more convenient. It all started with a frustrating experience
              - searching for a rental car that fit our needs and budget, only
              to be met with hidden fees and limited options. We envisioned a
              platform that empowered both car owners and renters, fostering a
              sense of community and exploration.
            </p>
            <div className="relative h-40 rounded-xl overflow-hidden">
              <motion.div style={{ y }}>
                <Image
                  src={womenDrivingTesla}
                  alt=""
                  placeholder="blur"
                  className="w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 sm:items-center flex flex-col-reverse gap-y-2">
            <div className="relative h-40 rounded-xl overflow-hidden">
              <motion.div style={{ y }}>
                <Image
                  src={manDriving}
                  alt=""
                  placeholder="blur"
                  className="w-full object-cover"
                />
              </motion.div>
            </div>
            <p className="text-[13px] sm:indent-4 indent-2 text-white/80">
              Today, Rent & Go connects you with a diverse range of cars,
              trucks, motorcycles, and SUVs from real people in your community.
              Our platform offers a transparent and hassle-free experience, with
              no hidden fees and 24/7 customer support to ensure a smooth ride
              every time. We believe in the power of exploration and the joy of
              discovering new places behind the wheel. Join us and unlock a
              world of possibilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
