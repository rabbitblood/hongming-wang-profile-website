import "./HackerStyleInput.css";

interface HackerStyleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputUnit?: string;
  valueHandler?: (value: string) => void;
}

export default function HackerStyleInput({
  inputUnit,
  valueHandler,
  ...props
}: HackerStyleInputProps) {
  return (
    <span className="hacker-style-input-container">
      <input className="hacker-style-input" {...props} />
      {inputUnit && <span className="input-unit">{inputUnit}</span>}
    </span>
  );
}
