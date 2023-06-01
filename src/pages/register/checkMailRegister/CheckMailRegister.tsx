
import Information from '@/components/information/Information';
import mailImage from '@/assets/images/mail.png';

import { useNavigate } from 'react-router-dom';

const CheckMailRegister = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <Information onClick={goToMain} title='Пожалуйста, проверьте почту!' btnText='Понятно' image={mailImage}>
      Мы отправили Вам на на почту письмо для&nbsp;подтверждения регистрации. <br /> Пожалуйста, пройдите по ссылке в
      письме.
    </Information>
  );
};

export default CheckMailRegister;
