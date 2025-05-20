"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { LoginForm } from "@/components/login-form"
// import { supabase } from "@/lib/supabaseClient";
import { SupabaseClient } from "@supabase/supabase-js"
import { supabase } from "lib/supabaseClient";
export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  // function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log("Logging in:", { email, password })
  // }

    async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
    } else {
      console.log("Logged in user:", data)
      // You can redirect using next/navigation if needed
      // router.push("/dashboard")
    }
  }

 return (
    <div className="max-w-md mx-auto py-16">
      <h2 className="text-2xl mb-6 text-center">Log In</h2>

     
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
          <Label htmlFor="password" className="mb-2">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
          {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}

        <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Logging in...
            </>
          ) : (
            "Log In"
          )}
        </Button>
      </form>
    </div>
  )
}
