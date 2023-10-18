import { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'

export function useBack(): MouseEventHandler<HTMLButtonElement> | undefined {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return goBack
}
