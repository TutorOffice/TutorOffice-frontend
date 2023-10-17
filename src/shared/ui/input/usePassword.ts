import { useState } from 'react'

export function usePassword(): [boolean, () => void] {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen(!open)
  }

  return [open, handleClick]
}
