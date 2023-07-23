import { FC } from "react";

interface DropdownProps {
  selected: string;
  options: string[];
  onChange: (t: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, onChange, selected }) => {
  const _onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <select onChange={_onChange} value={selected}>
      {options.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
