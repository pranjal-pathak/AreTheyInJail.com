"use client"

import { useState } from "react"
import { PencilIcon } from "@heroicons/react/24/solid"

export default function Contribute() {
  const [formData, setFormData] = useState({
    name: "",
    information: "",
    source: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Got a Lead? Share the Story!</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-stone-200 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-stone-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="information" className="block text-stone-700 font-semibold mb-2">
            Information
          </label>
          <textarea
            id="information"
            name="information"
            value={formData.information}
            onChange={handleChange}
            className="w-full p-2 border border-stone-300 rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="source" className="block text-stone-700 font-semibold mb-2">
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-2 border border-stone-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-stone-700 text-stone-100 px-6 py-2 rounded hover:bg-stone-600 transition-colors flex items-center justify-center w-full"
        >
          <PencilIcon className="h-5 w-5 mr-2" />
          Add Your Clue
        </button>
      </form>
    </div>
  )
}

