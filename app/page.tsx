'use client'; // Add this at the top

import SearchBar from './components/SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ContributeModal from './components/ContributeModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-center">
            UNMASKING
            <br />
            POWER'S DARK
            <br />
            <span className="text-primary">SIDE</span>
          </h2>
          <p className="text-xl tracking-wide text-muted-foreground max-w-md text-center mx-auto">
            CUTTING THROUGH THE NOISE.
            <br />
            EXPOSING THE TRUTH.
            <br />
            KEEPING THE SPOTLIGHT ON.
          </p>
          <div className="elegant-border p-8 bg-card">
            <SearchBar />
          </div>
        </div>
        <div className="elegant-border overflow-hidden bg-background">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover.jpg-A9mLaS15qg0KcLKtD2ywo8K87vzOFi.jpeg"
            alt="Stack of newspapers representing the power of media in exposing truth"
            width={800}
            height={600}
            className="w-full opacity-90 mix-blend-multiply contrast-125 grayscale"
            style={{
              filter: 'brightness(1.1) contrast(1.2) grayscale(1)',
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {[
          {
            title: 'CASE ARCHIVES',
            description:
              'Comprehensive database of high-profile cases. Track their journey through justice.',
          },
          {
            title: 'RAW INTEL',
            description: 'Unfiltered coverage of cases that matter. Zero sugar-coating.',
          },
          {
            title: 'PUBLIC MEMORY',
            description: "Because justice delayed shouldn't mean justice forgotten.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="elegant-border p-8 bg-card hover:bg-secondary transition-colors"
          >
            <h3 className="text-2xl font-playfair font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground tracking-wide">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block elegant-border bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest hover:bg-primary/90 transition-colors"
        >
          JOIN THE MOVEMENT
        </button>
      </div>

      <ContributeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
