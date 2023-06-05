import s from './SubmitForm.module.css';

import { FormValues } from '@/pages/register/Register';

import { changePassSchema, loginSchema, registerSchema } from '@/shared/utils/validationSchemas';

import { TValidationSubmitFormResolver } from '@/shared/types/validation';

import React, { createElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';


interface SubmitFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FormValues>;
  resolverType: string;
}

const getResolver = (type: string) => {
  if (type === TValidationSubmitFormResolver.REGISTER) {
    return yupResolver(registerSchema);
  } else if (type === TValidationSubmitFormResolver.LOGIN) {
    return yupResolver(loginSchema);
  } else {
    return yupResolver(changePassSchema);
  }
};

const SubmitForm: React.FC<SubmitFormProps> = ({ children, onSubmit, resolverType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: getResolver(resolverType),
    mode: 'onBlur',
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.submitForm}>
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
    </form>
  );
};

export default SubmitForm;
