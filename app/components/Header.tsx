"use client"

import { useState } from "react"
import Link from "next/link"
import { Scale, Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="relative pt-4 md:pt-12">
      {/* Mobile Menu Button - Fixed at top right */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 pt-20">
          <nav className="container flex flex-col space-y-6 p-4">
            <Link href="/" className="text-xl tracking-[0.2em] hover:text-primary transition-colors">
              SEARCH
            </Link>
            <Link href="/recent" className="text-xl tracking-[0.2em] hover:text-primary transition-colors">
              RECENT EXPOSÉS
            </Link>
            <Link href="/about" className="text-xl tracking-[0.2em] hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link href="/methodology" className="text-xl tracking-[0.2em] hover:text-primary transition-colors">
              METHODOLOGY
            </Link>
            <Link
              href="/contact"
              className="text-xl tracking-[0.2em] text-primary hover:text-primary/80 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}

      {/* Main Header Content */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16">
          {/* Only show on desktop */}
          <div className="hidden md:block flex-1">
            <div className="elegant-border p-4 inline-block">
              <Scale className="w-8 h-8 text-primary" />
              <p className="text-xs mt-2 tracking-wide">
                CASE
                <br />
                TRACKER
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-center">
            ARE THEY IN <span className="text-primary">JAIL</span>
          </h1>

          {/* Only show on desktop */}
          <div className="hidden md:block flex-1 text-right">
            <div className="rotate-12 bg-primary/10 p-4 inline-block">
              <p className="text-sm tracking-wide text-primary">
                INDIA'S WATCHDOG FOR
                <br />
                JUSTICE & ACCOUNTABILITY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block mx-8">
        <div className="border-t border-b border-primary/50">
          <div className="container">
            <nav className="flex items-center justify-between py-4">
              <Link href="/" className="text-sm tracking-[0.2em] hover:text-primary transition-colors">
                SEARCH
              </Link>
              <Link href="/recent" className="text-sm tracking-[0.2em] hover:text-primary transition-colors">
                RECENT EXPOSÉS
              </Link>
              <Link href="/about" className="text-sm tracking-[0.2em] hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/methodology" className="text-sm tracking-[0.2em] hover:text-primary transition-colors">
                METHODOLOGY
              </Link>
              <Link
                href="/contact"
                className="text-sm tracking-[0.2em] text-primary hover:text-primary/80 transition-colors"
              >
                GET IN TOUCH
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

