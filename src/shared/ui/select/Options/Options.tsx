import s from './options.module.css';

interface IOption {
  label: string;
  value: string;
}

interface IOptions {
  options: IOption[];
  optionValue: string;
  setOptionValue: (value: string) => void;
}

const Options = ({ options, optionValue, setOptionValue }: IOptions) => {
  return (
    <div className={s.root}>
      {options.map((option, index) => (
        <div className={s.option} onClick={() => setOptionValue(option.value)} key={index}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Options;
