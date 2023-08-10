import s from './dropdown.module.css';

import { Input, inputTypes } from '@/shared/ui';

import { ReactComponent as Icon } from '@/assets/icons/select-down.svg';

import { validateType } from '@/shared/validation';

import { RadioItems } from '@/shared/ui/radio/Radio';

import RadioItem from '@/shared/ui/radio/radioItem/RadioItem';

import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form';

interface DropdownProps {
  radioItems?: RadioItems[];
  name: validateType;
  register?: UseFormRegister<FieldValues>;
  control?: Control<FieldValues>;
}

const defaultRadioItems = [
  { id: 1, value: 'weight', text: 'по размеру файла' },
  { id: 2, value: 'date', text: 'по дате' },
];

const Dropdown: FC<DropdownProps> = ({ radioItems = defaultRadioItems, name, register, control }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [radioValue, setRadioValue] = useState(radioItems[0].value);
  const changeRadioValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const classNameOptions = clsx(s.hide, {
    [s.showOptions]: showOptions,
    [s.closeOptions]: !showOptions,
  });
  const classNameSelect = clsx(s.input, {
    [s.inputFocus]: showOptions,
  });

  const handlerOptions = () => {
    setShowOptions(!showOptions);
    inputRef.current?.focus();
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
    <div ref={ref} className={s.root}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            readOnly
            onClick={handlerOptions}
            placeholder={'Сортировать'}
            inputRef={inputRef}
            className={classNameSelect}
            type={inputTypes.text}
            right={
              <button onClick={handlerOptions} type='button' className={classNameOptions}>
                <Icon />
              </button>
            }
          >
            {showOptions && (
              <div className={s.options}>
                {radioItems.map((obj) => {
                  return (
                    <div key={obj.value} className={s.option}>
                      <RadioItem
                        key={obj.id}
                        itemValue={obj.value}
                        labelText={obj.text}
                        register={register}
                        name={name}
                        value={radioValue}
                        changeValue={changeRadioValue}
                        changeValueStorybook={field.onChange}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </Input>
        )}
      />
    </div>
  );
};

export default Dropdown;
