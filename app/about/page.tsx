"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ContributeModal from "../components/ContributeModal"

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="container py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 md:mb-16 text-center">ABOUT OUR MISSION</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold leading-tight">
            SHINING A LIGHT ON
            <br />
            POWER'S DARK CORNERS
          </h2>
          <p className="text-lg text-muted-foreground">
            AreTheyInJail.com is dedicated to exposing corruption and promoting accountability among India's powerful
            elite. We believe that true democracy thrives on transparency and justice.
          </p>
          <div className="elegant-border p-6 bg-card">
            <h3 className="text-xl font-serif font-bold mb-4">OUR CORE VALUES</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                <span>Unwavering commitment to truth</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                <span>Rigorous fact-checking and verification</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                <span>Protection of whistleblowers and sources</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                <span>Unbiased reporting across political spectrums</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="elegant-border overflow-hidden bg-background">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Scales of justice symbolizing our commitment to fairness and accountability"
            width={800}
            height={600}
            className="w-full opacity-90 mix-blend-multiply contrast-125 grayscale"
            style={{
              filter: "brightness(1.1) contrast(1.2) grayscale(1)",
            }}
          />
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">OUR STORY</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2025, AreTheyInJail.com is an open-source initiative that empowers citizens to contribute to the
            fight against corruption in India's corridors of power.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe in the power of collective action and transparency. As an open-source platform, we invite
            developers, journalists, and activists to contribute to our codebase and help build a more accountable
            society.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">OUR IMPACT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "CASES TRACKED",
                value: "500+",
                description: "High-profile cases meticulously monitored and updated",
              },
              {
                title: "WHISTLEBLOWERS PROTECTED",
                value: "100+",
                description: "Sources safeguarded through our secure channels",
              },
              {
                title: "PUBLIC REACH",
                value: "1M+",
                description: "Monthly visitors accessing critical information",
              },
            ].map((item, index) => (
              <div key={index} className="elegant-border p-8 bg-card hover:bg-secondary transition-colors">
                <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-4xl font-bold text-primary mb-4">{item.value}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">JOIN THE MOVEMENT</h2>
          <p className="text-lg text-muted-foreground mb-8">
            AreTheyInJail.com is more than just a website—it's a movement towards a more transparent and just India. We
            invite you to be part of this crucial mission.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="elegant-border bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest hover:bg-primary/90 transition-colors"
            >
              CONTRIBUTE TO THE CAUSE
            </button>
          </div>
        </section>
      </div>
      <ContributeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

