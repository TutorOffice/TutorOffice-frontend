import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import ChangePass from '../../pages/passwords/changePass/ChangePass';
import ChangePassFromMail from '../../pages/passwords/changePassFromMail/ChangePassFromMail';
import CheckMail from '../../pages/passwords/checkMail/CheckMail';
import SuccessPass from '../../pages/passwords/successPass/SuccessPass';
import Register from '../../pages/register/Register';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/change-pass' element={<ChangePass />} />
      <Route path='/change-pass-from-mail' element={<ChangePassFromMail />} />
      <Route path='/success-pass' element={<SuccessPass />} />
      <Route path='/check-mail' element={<CheckMail />} />
    </Routes>
  );
};

export default App;
