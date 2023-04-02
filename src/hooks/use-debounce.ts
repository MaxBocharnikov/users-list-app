import { useState, useEffect } from 'react'

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => { clearTimeout(debounceTimer) }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
