import UpdateCard from "../components/UpdateCard"

const recentUpdates = [
  { id: 1, name: "John Doe", status: "Convicted", date: "2023-05-15" },
  { id: 2, name: "Jane Smith", status: "Released", date: "2023-05-14" },
  { id: 3, name: "Bob Johnson", status: "Arrested", date: "2023-05-13" },
]

export default function RecentUpdates() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Recent Inmate Updates</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentUpdates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </div>
  )
}

