import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/login/Login';
import MainPage from '../../pages/mainPage/MainPage';
import ChangePass from '../../pages/passwords/changePass/ChangePass';
import ChangePassFromMail from '../../pages/passwords/changePassFromMail/ChangePassFromMail';
import CheckMailPass from '../../pages/passwords/checkMailPass/CheckMailPass';
import SuccessPass from '../../pages/passwords/successPass/SuccessPass';
import CheckMailRegister from '../../pages/register/checkMailRegister/CheckMailRegister';
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
      <Route path='/check-mail-register' element={<CheckMailRegister />} />
      <Route path='/check-mail-pass' element={<CheckMailPass />} />
    </Routes>
  );
};

export default App;
