"use client"

import { useState } from "react"
import ContributeModal from "./ContributeModal"

export default function ContributeButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center z-[90] bg-[#f3efea] hover:bg-[#e9e4dd] transition-colors shadow-md"
        aria-label="Contribute Information"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <ContributeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

