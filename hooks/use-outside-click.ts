"use client"

import { useEffect } from "react"

export function useOutsideClick(ref: any, callback: () => void, isOpen: boolean) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && isOpen) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback, isOpen])
}
