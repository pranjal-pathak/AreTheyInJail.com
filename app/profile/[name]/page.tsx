import { notFound } from "next/navigation"
import { AlertTriangle, FileText, MapPin, Calendar } from "lucide-react"

// This would typically come from a database
const profiles = {
  "rajesh-kumar": {
    name: "Rajesh Kumar",
    position: "Former Minister",
    crime: "Embezzlement",
    status: "Under Investigation",
    details: "Accused of embezzling ₹100 crore from public funds meant for rural development projects.",
    location: "New Delhi",
    lastUpdated: "2023-05-20",
  },
  "priya-sharma": {
    name: "Priya Sharma",
    position: "Business Tycoon",
    crime: "Tax Evasion",
    status: "Charges Filed",
    details: "Allegedly evaded taxes worth ₹500 crore through a complex network of shell companies.",
    location: "Mumbai",
    lastUpdated: "2023-05-19",
  },
  "vikram-singh": {
    name: "Vikram Singh",
    position: "Political Leader",
    crime: "Corruption",
    status: "Trial Pending",
    details: "Accused of accepting bribes totaling ₹50 crore for awarding government contracts.",
    location: "Lucknow",
    lastUpdated: "2023-05-18",
  },
}

export default function ProfilePage({ params }: { params: { name: string } }) {
  const profileName = params.name
  const profile = profiles[profileName as keyof typeof profiles]

  if (!profile) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-border">
        <h1 className="text-3xl font-bold mb-6 gradient-text">{profile.name}</h1>
        <div className="space-y-4">
          <p>
            <strong className="text-primary">Position:</strong> {profile.position}
          </p>
          <p>
            <strong className="text-primary">Alleged Crime:</strong> {profile.crime}
          </p>
          <p>
            <strong className="text-primary">Current Status:</strong> {profile.status}
          </p>
          <div className="flex items-start space-x-2">
            <AlertTriangle size={20} className="text-destructive mt-1" />
            <p className="flex-grow">{profile.details}</p>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-muted-foreground" />
            <p>{profile.location}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-muted-foreground" />
            <p>Last Updated: {profile.lastUpdated}</p>
          </div>
        </div>
        <div className="mt-8 p-4 bg-secondary rounded-md">
          <div className="flex items-center space-x-2 mb-2">
            <FileText size={20} className="text-primary" />
            <h2 className="text-lg font-semibold">Legal Disclaimer</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            The information provided on this page is for educational purposes only and does not constitute legal advice.
            All individuals are presumed innocent until proven guilty in a court of law. This data is compiled from
            public records and may not reflect current legal status.
          </p>
        </div>
      </div>
    </div>
  )
}

