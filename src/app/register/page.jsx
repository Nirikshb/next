"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cnfpassword, setcnfpassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire up your registration logic here
    console.log("Registering:", { email, password,cnfpassword })
  }

  return (
    <div className="max-w-xl mx-auto py-16">
      <h2 className="text-2xl mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="mb-2">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2 ">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          {/* how to add cursor pointer in tailwind */}
          <Label htmlFor="password" className="mb-2 cursor-pointer">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={cnfpassword}
            onChange={(e) => setcnfpassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="cursor-pointer">Register</Button>
      </form>
    </div>
  )
}
