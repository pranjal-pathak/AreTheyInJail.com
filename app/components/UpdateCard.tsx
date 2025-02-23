import Link from "next/link"
import { LockClosedIcon, LockOpenIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid"

interface Update {
  id: number
  name: string
  status: string
  date: string
}

export default function UpdateCard({ update }: { update: Update }) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "convicted":
        return <LockClosedIcon className="h-6 w-6 text-red-500" />
      case "released":
        return <LockOpenIcon className="h-6 w-6 text-green-500" />
      default:
        return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
    }
  }

  return (
    <Link href={`/inmate/${encodeURIComponent(update.name)}`}>
      <div className="bg-stone-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold font-playfair">{update.name}</h2>
          {getStatusIcon(update.status)}
        </div>
        <p className="text-stone-600 mb-2 font-roboto-slab">Status: {update.status}</p>
        <p className="text-stone-500 text-sm font-roboto-slab">Date: {update.date}</p>
      </div>
    </Link>
  )
}

