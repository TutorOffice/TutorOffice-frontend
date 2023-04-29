import s from './ErrorInfo.module.css';
import { btnClass, btnType, Button, ButtonGroup } from '../../../shared/ui';
import { Link } from 'react-router-dom';

interface ErrorInfoProps {
  imageUrl: string;
  title: string;
  description: string;
  code: string;
}

const ErrorInfo: React.FC<ErrorInfoProps> = ({ imageUrl, title, description, code }) => {
  return (
    <div className={s.content}>
      <img src={imageUrl} alt='not-found' className={s.image} />
      <h2 className={s.title}>{title}</h2>
      <div className={s.description}>{description}</div>
      <ButtonGroup>
        <Link to={code === '401' ? '/login' : '/'}>
          <Button type={btnType.submit} variant={btnClass.primary}>
            {code === '401' ? 'Вход' : 'На Главную'}
          </Button>
        </Link>
        <Button type={btnType.reset} variant={btnClass.ghost}>
          {code === '401' ? 'Регистрация' : 'Написать в поддержку'}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ErrorInfo;
