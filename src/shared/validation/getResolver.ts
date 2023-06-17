import {
  addStudentSchema,
  changePassFromMailSchema,
  changePassSchema,
  loginSchema,
  registerSchema,
} from './validationSchemas';

import { TValidationSubmitFormResolver } from './formResolver';

import { yupResolver } from '@hookform/resolvers/yup';

export const getResolver = (type: string) => {
  switch (type) {
    case TValidationSubmitFormResolver.REGISTER:
      return yupResolver(registerSchema);
    case TValidationSubmitFormResolver.LOGIN:
      return yupResolver(loginSchema);
    case TValidationSubmitFormResolver.ADD_STUDENT:
      return yupResolver(addStudentSchema);
    case TValidationSubmitFormResolver.CHANGE_PASS:
      return yupResolver(changePassSchema);
    case TValidationSubmitFormResolver.CHANGE_PASS_FROM_MAIL:
      return yupResolver(changePassFromMailSchema);
  }
};
