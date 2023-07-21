import { FC } from "react";

interface DropdownProps {
  options: string[];
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  return (
    <select>
      {options.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
