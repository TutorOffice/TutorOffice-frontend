import Information from '../../../components/information/Information';
import successImage from '../../../assets/images/successPass.png';

const SuccessPass = () => {
  return (
    <Information btnText='Вернуться на главную' title='Успех!' image={successImage}>
      Вы успешно сменили пароль.
    </Information>
  );
};

export default SuccessPass;
