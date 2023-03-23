import { useNavigate } from 'react-router-dom';

export function useBack(): [() => void] {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return [goBack];
}
