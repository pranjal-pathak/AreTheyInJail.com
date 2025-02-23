import { notFound } from "next/navigation"

// This would typically come from a database
const inmates = {
  "john-doe": {
    name: "John Doe",
    status: "Incarcerated",
    crime: "Theft",
    sentence: "2 years",
    facility: "State Correctional Institution",
  },
  "jane-smith": {
    name: "Jane Smith",
    status: "Released",
    crime: "Fraud",
    sentence: "18 months (completed)",
    facility: "County Jail",
  },
  "bob-johnson": {
    name: "Bob Johnson",
    status: "Pending Trial",
    crime: "Assault",
    sentence: "N/A",
    facility: "City Detention Center",
  },
}

export default function InmatePage({ params }: { params: { name: string } }) {
  const inmateName = params.name
  const inmateData = inmates[inmateName as keyof typeof inmates]

  if (!inmateData) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 gradient-text">{inmateData.name}</h1>
        <div className="space-y-4">
          <p>
            <strong className="text-primary">Status:</strong> {inmateData.status}
          </p>
          <p>
            <strong className="text-primary">Crime:</strong> {inmateData.crime}
          </p>
          <p>
            <strong className="text-primary">Sentence:</strong> {inmateData.sentence}
          </p>
          <p>
            <strong className="text-primary">Facility:</strong> {inmateData.facility}
          </p>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Disclaimer: This information is for educational purposes only and may not reflect current legal status.</p>
        </div>
      </div>
    </div>
  )
}

