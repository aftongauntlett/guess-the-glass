// components/InputField.tsx
import { Field } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  error,
  touched,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && touched && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
