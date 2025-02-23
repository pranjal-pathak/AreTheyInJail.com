"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/profile/${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="WHO'S DUCKING JUSTICE TODAY?"
          className="w-full p-4 bg-background text-foreground border-0 border-b-2 border-primary focus:outline-none focus:border-primary text-lg tracking-wide placeholder:text-muted-foreground/50"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-4 text-primary hover:text-primary/80 transition-colors"
          aria-label="Search"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  )
}

