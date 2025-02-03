/** @format */

"use client";
import { X } from "lucide-react";
import { useState } from "react";
export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div className="relative bg-gradient-to-r from-orange-400 to-purple-500 text-white px-4 py-3 text-center">
      {" "}
      <span className="text-sm">
        Хуримын урьдчилсан захиалга 20% off.{" "}
      </span>{" "}
      <a href="#" className="text-sm underline hover:no-underline">
        {" "}
        Дэлгэрэнгүй.{" "}
      </a>{" "}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded"
        aria-label="Close banner"
      >
        {" "}
        <X className="h-4 w-4" />{" "}
      </button>{" "}
    </div>
  );
}
