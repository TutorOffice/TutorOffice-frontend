import s from './SubmitForm.module.css';

import { FormValues } from '@/pages/register/Register';
import { Button, btnClass, btnType } from '@/shared/ui';

import { getResolver } from '@/shared/validation/getResolver';

import React, { createElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SubmitFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormValues>;
  resolverType: string;
  btnText?: string;
  btnWidth?: string;
  top?: string;
  bottom?: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  children,
  onSubmit,
  resolverType,
  top,
  bottom,
  btnText,
  btnWidth,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: getResolver(resolverType),
    mode: 'onBlur',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: top, marginBottom: bottom }} className={s.submitForm}>
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
      {btnText && (
        <Button width={btnWidth} isDisabled={!isValid} type={btnType.submit} variant={btnClass.primary}>
          {btnText}
        </Button>
      )}
    </form>
  );
};

export default SubmitForm;
