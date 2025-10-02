"use client";
import React, { useEffect } from "react";
import anime from "animejs";

function HeroSquares() {
  useEffect(() => {
    anime({
      targets: ".moving-square",
      keyframes: [
        { translateX: 0, translateY: 0 },          // Start (stacked)
        { translateX: 0, translateY: -390 },       // Go Up
        { translateX: 1400, translateY: -390 },    // Go Right Top
        { translateX: 1400, translateY: 0 },       // Right Middle
        { translateX: 1400, translateY: 350 },     // Bottom Right
        { translateX: 0, translateY: 350 },        // Bottom Middle
        { translateX: 0, translateY: 0 },          // Back to Start
      ],
      duration: 15000,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none overflow-hidden hidden sm:block">
      {/* Fixed Square (lighter) */}
      <div className="fixed-square absolute left-[10%] top-1/2 -translate-y-1/2 w-16 h-16">
        <div className="absolute inset-0 bg-primary/20 rounded-lg shadow-lg border border-primary/30"></div>
      </div>

      {/* Moving Square (darker) */}
      <div className="moving-square absolute left-[10%] top-1/2 -translate-y-1/2 w-16 h-16">
        <div className="absolute inset-0 bg-primary/70 rounded-lg shadow-lg border border-primary/50"></div>
      </div>
    </div>
  );
}

export default HeroSquares;
