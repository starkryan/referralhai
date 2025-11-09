'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    // Redirect to main page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go back home
          </Link>

          <p className="text-sm text-gray-500">
            You will be redirected automatically in 3 seconds...
          </p>
        </div>

        <div className="mt-12">
          <p className="text-xs text-gray-400">
            If you think this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  )
}