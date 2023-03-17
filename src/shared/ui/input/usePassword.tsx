import { useState } from 'react';
import close from '../../../assets/icons/pass-close.svg';
import open from '../../../assets/icons/pass-open.svg';

export function usePassword(): [boolean, () => void] {
  const [open, setOpen] = useState<boolean>(false);

  function handleClick() {
    setOpen(!open);
  }

  return [open, handleClick];
}
