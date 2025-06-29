"use client"

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Bail out early if matchMedia isn’t available (very old / non-DOM envs)
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      setIsMobile(false)
      return
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // 1️⃣  set initial value
    setIsMobile(mql.matches)

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    // 2️⃣  add listener with proper fallback
    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange)
    } else {
      // eslint-disable-next-line deprecation/deprecation
      mql.addListener(onChange)
    }

    // 3️⃣  cleanup — again with fallback
    return () => {
      if ("removeEventListener" in mql) {
        mql.removeEventListener("change", onChange)
      } else {
        // eslint-disable-next-line deprecation/deprecation
        mql.removeListener(onChange)
      }
    }
  }, [])

  return !!isMobile
}
