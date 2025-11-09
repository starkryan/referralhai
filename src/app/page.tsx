'use client'

import React, { useEffect } from 'react'
import { toast } from 'sonner'

function page() {
  useEffect(() => {
    // Load toast bridge script
    const script = document.createElement('script')
    script.src = '/toast-bridge.js'
    script.async = true
    document.body.appendChild(script)

    // Make toast available globally for the bridge
    window.toast = {
      success: toast.success,
      error: toast.error,
      info: toast.info,
      warning: toast.warning,
      loading: toast.loading
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <iframe
      src="/index.html"
      className="w-full h-screen border-none"
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}

export default page
