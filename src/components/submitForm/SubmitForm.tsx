import s from './SubmitForm.module.css';

import { IFormValues } from '@/shared/validation';
import { Button, ButtonGroup, btnClass, btnType } from '@/shared/ui';
import { getResolver } from '@/shared/validation/getResolver';

import React, { createElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SubmitFormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<IFormValues>;
  resolverType: string;
  btnText?: string;
  btnWidth?: string;
  top?: string;
  bottom?: string;
  btnGroup?: boolean;
}

const SubmitForm: React.FC<SubmitFormProps> = ({
  children,
  onSubmit,
  resolverType,
  top,
  bottom,
  btnText = 'Сохранить',
  btnWidth,
  btnGroup,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    resolver: getResolver(resolverType),
    mode: 'onBlur',
  });

  let submitControls;
  if (btnGroup) {
    submitControls = (
      <ButtonGroup width='100%'>
        <Button width='100%' isDisabled={!isValid} type={btnType.submit} variant={btnClass.primary}>
          {btnText}
        </Button>
        <Button width='100%' type={btnType.reset} variant={btnClass.ghost}>
          Отменить
        </Button>
      </ButtonGroup>
    );
  } else {
    submitControls = (
      <Button width={btnWidth} isDisabled={!isValid} type={btnType.submit} variant={btnClass.primary}>
        {btnText}
      </Button>
    );
  }

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
      {submitControls}
    </form>
  );
};

export default SubmitForm;
