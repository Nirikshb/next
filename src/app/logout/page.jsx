"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function LogoutPage() {
  function handleLogout() {
    // TODO: clear auth tokens / session
    console.log("Logged out")
    // Optionally redirect:
    window.location.href = "/"
  }

  // Or auto‑logout on mount:
  useEffect(() => {
    handleLogout()
  }, [])

  return (
    <div className="max-w-md mx-auto py-16 text-center">
      <h2 className="text-2xl mb-6">Goodbye!</h2>
      <Button onClick={handleLogout}>Return to Home</Button>
    </div>
  )
}
