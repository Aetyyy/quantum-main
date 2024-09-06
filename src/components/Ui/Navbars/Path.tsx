"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function Path({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
        isActive
          ? "border-violet-700 text-violet-700"
          : "border-transparent text-slate-300 hover:border-violet-700 hover:text-violet-700"
      }`}
      style={{ outline: "none" }}
    >
      {children}
    </Link>
  );
}
