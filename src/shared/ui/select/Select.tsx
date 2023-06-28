import s from './Select.module.css';

import { Input, inputTypes } from '@/shared/ui';
import { ReactComponent as Icon } from '@/assets/icons/select-down.svg';

import Options from '@/shared/ui/select/Options/Options';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface Option {
  readonly label: string;
  readonly value: string;
}

interface ISelect {
  options: Option[];
  placeholder: string;
}

const initialSelectOptions = [{ label: '🍇', value: '🍇' }];

const Select = ({ options = initialSelectOptions, placeholder }: ISelect) => {
  const [showOptions, setShowOptions] = useState(false);
  const [optionValue, setOptionValue] = useState<string>('');
  const classNameOptions = clsx(s.hide, {
    [s.showOptions]: showOptions,
    [s.closeOptions]: !showOptions,
  });
  const classNameSelect = clsx(s.input, {
    [s.inputFocus]: showOptions,
  });
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerOptionValue = (event: ChangeEvent<HTMLInputElement>) => {
    setOptionValue(event.target.value);
  };

  const handlerOptions = () => {
    setShowOptions(!showOptions);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (showOptions) {
      setOptionValue('');
    }
  }, [showOptions]);

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
        inputRef={inputRef}
        value={optionValue}
        onChange={handlerOptionValue}
        placeholder={placeholder}
        className={classNameSelect}
        type={inputTypes.text}
      >
        <button type='button' className={classNameOptions}>
          <Icon />
        </button>
        {showOptions && <Options options={options} optionValue={optionValue} setOptionValue={setOptionValue} />}
      </Input>
    </div>
  );
};
export default Select;
