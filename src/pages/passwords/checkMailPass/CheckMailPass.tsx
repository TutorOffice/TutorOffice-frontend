import Information from '../../../components/information/Information';
import mailImage from '../../../assets/images/mail.png';
import { useNavigate } from 'react-router-dom';

const CheckMailPass = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <Information btnText='Понятно' title='Пожалуйста, проверьте почту!' image={mailImage} onClick={goToMain}>
      Мы отправили Вам на почту письмо для сброса пароля. <br /> Пожалуйста, пройдите по ссылке в письме.
    </Information>
  );
};

export default CheckMailPass;
