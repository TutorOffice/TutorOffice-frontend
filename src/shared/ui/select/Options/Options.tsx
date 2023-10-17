import s from './options.module.css'

interface IOption {
  label: string
  value: string
}

interface IOptions {
  options: IOption[]
  optionValue: string
  setOptionValue: (value: string) => void
  setHookFormValue: (value: string) => void
}

const Options = ({
  options,
  optionValue,
  setOptionValue,
  setHookFormValue,
}: IOptions) => {
  const setValue = (value: string) => {
    setOptionValue(value)
    setHookFormValue(value)
  }

  return (
    <div className={s.root}>
      {options
        .filter((option) =>
          option.value.toLowerCase().includes(optionValue.toLowerCase()),
        )
        .map((option) => (
          <div
            key={option.value}
            className={s.option}
            onClick={() => setValue(option.value)}
          >
            {option.label}
          </div>
        ))}
    </div>
  )
}

export default Options
