import React from 'react'

import { ReactComponent as CloseCookie } from '@/assets/icons/close-cookie.svg'
import { Button } from '@/shared/ui'

import s from './CookieWindow.module.css'

interface CookieWindowProps {
  onClose: () => void
}

const CookieWindow: React.FC<CookieWindowProps> = ({ onClose }) => {
  return (
    <div className={s.cookie}>
      <div className={s.cookie__text}>
        <p>
          Этот сайт использует cookie и другие похожие технологии для хранения
          данных в соответствии с настоящим Уведомлением.
        </p>
        <p>
          Продолжая использовать сайт, Вы даете свое согласие на работу с этими
          файлами.
        </p>
      </div>
      <Button onClick={onClose}>Ок</Button>
      <div className={s.close__cookie} onClick={onClose}>
        <CloseCookie />
      </div>
    </div>
  )
}

export default CookieWindow
