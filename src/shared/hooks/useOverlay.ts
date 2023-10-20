import { useEffect } from 'react'

export const useOverlay: (
  isOpen: boolean,
  onClose: () => void,
) => (e: React.MouseEvent) => void = (isOpen, onClose) => {
  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    if (isOpen) document.body.style.overflowY = 'hidden'

    return () => {
      document.removeEventListener('keydown', keyboardHandler)
      document.body.style.overflowY = 'auto'
    }
  }, [isOpen, onClose])

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  return handleOverlay
}
