import { useNavigate } from 'react-router-dom'

import successImage from '@/assets/images/successPass.png'
import Information from '@/components/information/Information'

const SuccessPass = () => {
  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/')
  }

  return (
    <Information
      onClick={goToMain}
      btnText="Вернуться на главную"
      title="Успех!"
      image={successImage}
    >
      Вы успешно сменили пароль.
    </Information>
  )
}

export default SuccessPass
