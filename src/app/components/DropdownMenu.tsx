// components/DropdownMenu.tsx
import { Field } from "formik";

interface DropdownMenuProps {
  label: string;
  name: string;
  options: string[];
  error?: string;
  touched?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  name,
  options,
  error,
  touched,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      {error && touched && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default DropdownMenu;
