import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <>
      <nav className="sticky flex-none w-full top-0 z-40 border-b border-secondary bg-zinc-900 shadow-2xl print:hidden">
        <div className="container mx-auto px-4">
          <div className="flex h-[60px] items-center">
            <button
              type="button"
              className="rounded-md bg-secondary p-2 text-secondary-foreground lg:hidden"
            >
              <GiHamburgerMenu className="h-6 w-6"/>
            </button>
            <div className="mr-2 flex items-center">
              <Link href={"/"} className="mr-2" style={{ outline: "none" }}>
                <span className="sr-only">
                  Quantum Market
                  {/*  */} Logo
                </span>
                <Image
                  src={"/Quantum.png"}
                  width={1000}
                  height={1000}
                  alt="Quantum_Logo"
                  className="w-auto h-9 pl-2 lg:h-10"
                  decoding="async"
                  style={{ color: "transparent" }}
                  data-nimg="1"
                  fetchPriority="high"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
