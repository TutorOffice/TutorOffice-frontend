import MainPage from '@/pages/mainPage/MainPage';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import ChangePass from '@/pages/passwords/changePass/ChangePass';
import ChangePassFromMail from '@/pages/passwords/changePassFromMail/ChangePassFromMail';
import SuccessPass from '@/pages/passwords/successPass/SuccessPass';
import CheckMailRegister from '@/pages/register/checkMailRegister/CheckMailRegister';
import CheckMailPass from '@/pages/passwords/checkMailPass/CheckMailPass';
import Profile from '@/pages/profile/Profile';
import NoLesson from '@/pages/noLesson/NoLesson';
import CalendarPage from '@/pages/calendarPage/CalendarPage';
import CalendarDay from '@/pages/calendarDay/CalendarDay';
import Lesson from '@/pages/lesson/Lesson';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import HomeWork from '@/pages/homeWork/HomeWork';

import { Route, Routes } from 'react-router-dom';

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
      <Route path='/profile' element={<Profile />} />
      <Route path='/no-lesson' element={<NoLesson />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route path='/calendar/:date' element={<CalendarDay />} />
      <Route path='/calendar/:date/:lessonId' element={<Lesson />} />
      <Route path='/homework' element={<HomeWork />} />
      <Route path='/not-found' element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
