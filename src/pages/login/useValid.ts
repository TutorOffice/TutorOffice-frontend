import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

export const useValid = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data);
  };

  return { register, handleSubmit, formState, onSubmit };
};
