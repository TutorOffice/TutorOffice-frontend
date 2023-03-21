import Information from '../../../components/information/Information';
import mailImage from '../../../assets/images/mail.png';

const CheckMailPass = () => {
  return (
    <Information btnText='Понятно' title='Пожалуйста, проверьте почту!' image={mailImage}>
      Мы отправили Вам на почту письмо для сброса пароля. <br /> Пожалуйста, пройдите по ссылке в письме.
    </Information>
  );
};

export default CheckMailPass;
