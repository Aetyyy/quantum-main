import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import ActivePath from "@/components/Ui/Navbars/Path";

export default function Navbar() {
  return (
    <>
      <nav className="sticky flex-none w-full top-0 z-40 border-b border-violet-900 bg-zinc-950 opacity-95 shadow-2xl print:hidden">
        <div className="container mx-auto px-4">
          <div className="flex h-[60px] items-center">
            <button
              type="button"
              className="rounded-md bg-zinc-800/50 p-2 lg:hidden"
            >
              <GiHamburgerMenu className="h-6 w-6 text-slate-400" />
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
            <div className="hidden lg:ml-4 lg:block lg:self-stretch">
              <div className="flex h-full space-x-6">
                <ActivePath href={"/"}>
                  <HiOutlineHome className="h-4 w-4" />
                  <span>Beranda</span>
                </ActivePath>
                <ActivePath href={"/invoices"}>
                  <LiaFileInvoiceSolid className="h-4 w-4" />
                  <span>Lihat Pembelian</span>
                </ActivePath>
              </div>
            </div>
            <div className="ml-auto flex h-full items-center gap-x-2 lg:gap-x-6">
              <div className="flex flex-row-reverse items-center gap-x-2">
                <div className=""></div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-500/50 bg-transparent px-2 py-2 text-sm font-semibold text-slate-300 duration-300 ease-in-out hover:bg-zinc-600/50 hover:text-white sm:pl-4 sm:pr-4">
                  <IoIosSearch className="h-5 w-5 sm:h-4 sm:w-4" />
                  <span className="hidden text-sm lg:block">Search</span>
                </button>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                <Link
                  href={"/login"}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-500/50 px-4 py-2 text-sm font-medium text-slate-300 duration-300 ease-in-out hover:bg-zinc-600/50 hover:text-white"
                >
                  Masuk
                </Link>
                <Link
                  href={"/register"}
                  className="inline-flex items-center justify-center rounded-lg bg-violet-950 px-4 py-2 text-sm font-medium text-slate-300 duration-300 ease-in-out hover:bg-violet-800 hover:text-white"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
