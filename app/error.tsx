"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="font-serif text-4xl font-bold text-primary">Something went wrong!</h1>
        <p className="text-muted-foreground max-w-md mx-auto">An unexpected error occurred. Please try again.</p>
        <Button onClick={reset} className="bg-primary hover:bg-primary/90 rounded-full">
          Try again
        </Button>
      </div>
    </div>
  )
}
