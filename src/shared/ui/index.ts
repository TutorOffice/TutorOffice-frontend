import { btnClass, btnType } from './button/Button';
import { inputTypes } from './input/Input';

export enum validateType {
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  patronymic = 'patronymic',
  phone = 'phone',
  password = 'password',
  confirmPassword = 'confirmPassword',
  userType = 'userType',
  policy = 'policy',
  level = 'level',
}

export { default as Button } from './button/Button';
export { default as Input } from './input/Input';
export { default as LoadImage } from './loadImage/LoadImage';
export { default as Modal } from './modal/Modal';
export { default as ButtonGroup } from './buttonGroup/ButtonGroup';

export { btnClass, btnType, inputTypes };
