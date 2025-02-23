import Link from "next/link"
import { ArrowRight } from "lucide-react"

const recentExposés = [
  {
    id: 1,
    name: "RAJESH KUMAR",
    position: "EX-CABINET MINISTER",
    crime: "₹500CR DEVELOPMENT FUND SCANDAL",
    status: "DODGING COURT",
  },
  {
    id: 2,
    name: "PRIYA SHARMA",
    position: "TECH MOGUL",
    crime: "SYSTEMATIC TAX EVASION",
    status: "PLAYING THE SYSTEM",
  },
  {
    id: 3,
    name: "VIKRAM SINGH",
    position: "PARTY CHIEF",
    crime: "POWER ABUSE",
    status: "FACING HEAT",
  },
]

export default function RecentExposés() {
  return (
    <div className="container py-8 md:py-16 px-4 md:px-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 md:mb-16 text-center">LATEST REVELATIONS</h1>
      <div className="space-y-8">
        {recentExposés.map((exposé) => (
          <Link href={`/profile/${exposé.name.toLowerCase().replace(" ", "-")}`} key={exposé.id}>
            <div className="elegant-border p-8 bg-card hover:bg-secondary transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-playfair font-bold mb-2">{exposé.name}</h2>
                  <p className="text-muted-foreground tracking-wide mb-1">{exposé.position}</p>
                  <p className="text-primary font-bold tracking-wide mb-2">{exposé.crime}</p>
                  <p className="text-sm tracking-widest">{exposé.status}</p>
                </div>
                <ArrowRight size={24} className="text-primary" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

