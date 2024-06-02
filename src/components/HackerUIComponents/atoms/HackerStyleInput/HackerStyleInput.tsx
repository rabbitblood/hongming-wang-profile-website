import "./HackerStyleInput.css";

interface HackerStyleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputUnit?: string;
  valueHandler?: (value: string) => void;
  additionalClass?: string;
  rounded?: boolean;
}

export default function HackerStyleInput({
  inputUnit,
  valueHandler,
  additionalClass,
  rounded,
  ...props
}: HackerStyleInputProps) {
  return (
    <span className={`hacker-style-input-container ${additionalClass} `}>
      <input
        className={`hacker-style-input ${inputUnit ? "has-input-unit" : ""} 
        ${rounded ? "rounded" : ""}`}
        {...props}
      />
      {inputUnit && <span className="input-unit">{inputUnit}</span>}
    </span>
  );
}
