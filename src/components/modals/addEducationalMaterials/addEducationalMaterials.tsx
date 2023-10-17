import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Button, Modal } from '@/shared/ui'

import s from './addEducationalMaterials.module.css'

interface IAddEducationMaterials {
  isOpen: boolean
  onClose: () => void
  width: string
}

const AddEducationMaterials = ({
  isOpen,
  onClose,
  width,
}: IAddEducationMaterials) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [errorMsg, setErrorMsg] = useState('')
  const [isError, setIsError] = useState(false)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }
    setSelectedFile(event.target.files[0])
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    validateSelectedFile()
  }, [selectedFile])

  const validateSelectedFile = () => {
    const MAX_FILE_SIZE = 25 // 25MB

    if (selectedFile) {
      const fileSizeMb = selectedFile.size / 8 / 1024 / 1024

      if (fileSizeMb > MAX_FILE_SIZE) {
        setErrorMsg('File size is greater than maximum limit')
        setIsError(true)
        return
      }

      setErrorMsg('')
      setIsError(false)
    }
  }
  return (
    <>
      <Modal
        title="Добавить учебный материал"
        isOpen={isOpen}
        onClose={onClose}
        width={width}
        isErrorUploadText={errorMsg}
        isErrorUpload={isError}
      >
        <p className={s.text}>
          Формат PDF, JPEG, Word или Excel не больше 25 Мб
        </p>
        <div className={s.button}>
          <Button onClick={handleClick}>Выбрать файл</Button>
        </div>
        {selectedFile?.name}
        <input
          onChange={handleFileChange}
          accept="application/pdf,image/jpeg,application/msword, application/vnd.ms-excel"
          className={s.hideInput}
          ref={inputRef}
          type="file"
        />
      </Modal>
    </>
  )
}

export default AddEducationMaterials
