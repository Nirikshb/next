// src/components/common/Header.jsx
"use client"

import React from "react"
import "@/styles/Header.css"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">
          <Link href="/" className="header__logo">
            <img src="https://assets.friendlydiamonds.com/fdl/fd_gif/our-story-bird.gif" width={50} height={50} alt="Logo" className="header__logo-img" />
          </Link>
        </h1>


        <nav className="hidden md:flex header__nav">
          <a href="/" className="header__link text-gray-700">Home</a>
          <a href="/login" className="header__link text-gray-700">Log In</a>
          <a href="/register" className="header__link text-gray-700">Register</a>
          <a href="/logout" className="header__link text-gray-700">Log Out</a>
        </nav>


        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Open navigation menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigation links</SheetDescription>
            </SheetHeader>


            <nav className="flex flex-col space-y-4 mt-6">
              <a href="/" className="header__link text-lg text-gray-700">Home</a>
              <a href="/login" className="header__link text-lg text-gray-700">Log In</a>
              <a href="/register" className="header__link text-lg text-gray-700">Register</a>
              <a href="/logout" className="header__link text-lg text-gray-700">Log Out</a>
            </nav>

            <SheetFooter className="mt-auto">
              <SheetClose asChild>
                <button className="mt-6 px-4 py-2 bg-gray-200 rounded">
                  Close
                </button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
