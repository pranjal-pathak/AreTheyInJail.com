"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface ContributeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContributeModal({ isOpen, onClose }: ContributeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
      <div className="bg-[#f3efea] w-full max-w-md mx-auto relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-6 top-6">
          <X className="h-6 w-6 text-black hover:text-primary transition-colors" />
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-3xl font-serif font-bold mb-8 text-black">YOUR VOICE</h2>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block font-serif text-black mb-4">NAME OF ACCUSED</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full pb-2 bg-transparent border-0 text-black focus:outline-none text-lg"
                  required
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></div>
                <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-primary/50"></div>
              </div>
            </div>

            <div>
              <label className="block font-serif text-black mb-4">POSITION / ROLE</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full pb-2 bg-transparent border-0 text-black focus:outline-none text-lg"
                  required
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></div>
                <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-primary/50"></div>
              </div>
            </div>

            <div>
              <label className="block font-serif text-black mb-4">CASE DETAILS</label>
              <div className="relative">
                <textarea
                  rows={2}
                  className="w-full pb-2 bg-transparent border-0 text-black focus:outline-none text-lg resize-none"
                  required
                ></textarea>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></div>
                <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-primary/50"></div>
              </div>
            </div>

            <div>
              <label className="block font-serif text-black mb-4">SOURCE</label>
              <div className="relative">
                <input
                  type="url"
                  className="w-full pb-2 bg-transparent border-0 text-black focus:outline-none text-lg"
                  required
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></div>
                <div className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-primary/50"></div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-[0.2em] hover:bg-primary/90 transition-colors"
              >
                BE PART OF THE RESISTANCE
              </button>
            </div>
          </form>

          <p className="text-sm text-black/70 mt-4 text-center">
            Share intel. Make waves. Your information helps keep the spotlight on.
          </p>
        </div>
      </div>
    </div>
  )
}

