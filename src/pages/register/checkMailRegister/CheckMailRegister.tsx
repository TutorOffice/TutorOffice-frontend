import Information from '../../../components/information/Information';
import mailImage from '../../../assets/images/mail.png';

const CheckMailRegister = () => {
  return (
    <Information title='Пожалуйста, проверьте почту!' btnText='Понятно' image={mailImage}>
      Мы отправили Вам на на почту письмо для&nbsp;подтверждения регистрации. <br /> Пожалуйста, пройдите по ссылке в
      письме.
    </Information>
  );
};

export default CheckMailRegister;
