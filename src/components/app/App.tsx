import { Route, Routes } from 'react-router-dom'

import AboutProject from '@/pages/aboutProject/AboutProject'
import AddLesson from '@/pages/addLesson/AddLesson'
import CalendarDay from '@/pages/calendarDay/CalendarDay'
import CalendarPage from '@/pages/calendarPage/CalendarPage'
import EducationalMaterials from '@/pages/educationalMaterials/EducationalMaterials'
import ErrorPage from '@/pages/errorPage/ErrorPage'
import Feedback from '@/pages/feedback/Feedback'
import HomeWork from '@/pages/homeWork/HomeWork'
import Lesson from '@/pages/lesson/Lesson'
import Login from '@/pages/login/Login'
import MainPage from '@/pages/mainPage/MainPage'
import NoLesson from '@/pages/noLesson/NoLesson'
import ChangePassword from '@/pages/passwords/changePassword/ChangePassword'
import CheckMailPass from '@/pages/passwords/checkMailPass/CheckMailPass'
import ResetPassFromMail from '@/pages/passwords/resetPassFromMail/ResetPassFromMail'
import ResetPassword from '@/pages/passwords/resetPassword/ResetPassword'
import SuccessPass from '@/pages/passwords/successPass/SuccessPass'
import Profile from '@/pages/profile/Profile'
import CheckMailRegister from '@/pages/register/checkMailRegister/CheckMailRegister'
import Register from '@/pages/register/Register'
import Student from '@/pages/student/Student'
import StudentsPage from '@/pages/studentsPage/StudentsPage'
import UserEducationalMaterials from '@/pages/userEducationalMaterials/UserEducationalMaterials'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/change-pass" element={<ChangePassword />} />
      <Route path="/reset-pass" element={<ResetPassword />} />
      <Route path="/reset-pass-from-mail" element={<ResetPassFromMail />} />
      <Route path="/success-pass" element={<SuccessPass />} />
      <Route path="/check-mail-register" element={<CheckMailRegister />} />
      <Route path="/check-mail-pass" element={<CheckMailPass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/no-lesson" element={<NoLesson />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:date" element={<CalendarDay />} />
      <Route path="/calendar/:date/:lessonId" element={<Lesson />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/:id" element={<Student />} />
      <Route path="/homework" element={<HomeWork />} />
      <Route path="/educational-materials" element={<EducationalMaterials />} />
      <Route
        path="/educational-materials/:userId"
        element={<UserEducationalMaterials />}
      />
      <Route path="/about" element={<AboutProject />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/add-lesson" element={<AddLesson />} />
      <Route path="/not-found" element={<ErrorPage errorCode="404" />} />
    </Routes>
  )
}

export default App
