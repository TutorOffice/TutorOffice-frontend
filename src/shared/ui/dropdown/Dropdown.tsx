import s from './dropdown.module.css';

import { Input, inputTypes } from '@/shared/ui';

import { ReactComponent as Icon } from '@/assets/icons/select-down.svg';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const classNameOptions = clsx(s.hide, {
    [s.showOptions]: showOptions,
    [s.closeOptions]: !showOptions,
  });
  const classNameSelect = clsx(s.input, {
    [s.inputFocus]: showOptions,
  });

  const handlerOptions = () => {
    setShowOptions(!showOptions);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e: TouchEvent | MouseEvent) => {
      if (showOptions && ref.current && !ref.current.contains(e.target as Node)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showOptions]);

  return (
    <div ref={ref} className={s.root} onClick={handlerOptions}>
      <Input
        value='Test'
        className={classNameSelect}
        type={inputTypes.button}
        right={
          <button type='button' className={classNameOptions}>
            <Icon />
          </button>
        }
      >
        {showOptions && <div>open</div>}
      </Input>
    </div>
  );
};

export default Dropdown;
