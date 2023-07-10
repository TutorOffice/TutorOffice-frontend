import s from './SubmitForm.module.css';

import { IFormValues } from '@/shared/validation';
import { Button, ButtonGroup, btnClass, btnType } from '@/shared/ui';
import { getResolver } from '@/shared/validation/getResolver';

import React, { createElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';

interface SubmitFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<IFormValues>;
  resolverType: string;
  btnText?: string;
  btnWidth?: string;
  btnGroup?: boolean;
  defaultValues?: IFormValues;
  className?: string;
  submitBtnClassName?: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  children,
  onSubmit,
  resolverType,
  btnText,
  btnWidth,
  btnGroup,
  defaultValues,
  className,
  submitBtnClassName,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    defaultValues: defaultValues,
    resolver: getResolver(resolverType),
    mode: 'onBlur',
  });

  let submitControls;
  if (btnGroup) {
    submitControls = (
      <ButtonGroup width='100%'>
        <Button
          className={submitBtnClassName}
          width='100%'
          isDisabled={!isValid}
          type={btnType.submit}
          variant={btnClass.primary}
        >
          {btnText}
        </Button>
        <Button width='100%' type={btnType.reset} variant={btnClass.ghost}>
          Отменить
        </Button>
      </ButtonGroup>
    );
  } else if (btnText) {
    submitControls = (
      <Button width={btnWidth} isDisabled={!isValid} type={btnType.submit} variant={btnClass.primary}>
        {btnText}
      </Button>
    );
  }

  const formClassName = clsx(className, { [s.submitForm]: true });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    errors: errors[child.props.name],
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
      {submitControls}
    </form>
  );
};

export default SubmitForm;
