"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the shape of the form values
type WineFormValues = {
  name: string;
  type: string;
  region: string;
  vintage: string | number;
  flavorNotes: string;
  price: string | number;
};

// Fields metadata
const fields: {
  name: keyof WineFormValues;
  label: string;
  type: "text" | "number" | "textarea" | "select" | "url";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter wine name",
    required: true,
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: ["Red", "White", "Rosé", "Sparkling"],
    required: true,
  },
  {
    name: "flavorNotes",
    label: "Flavor Notes",
    type: "text",
    placeholder: "e.g., Fruity, Earthy",
    required: true,
  },
  {
    name: "price",
    label: "Price ($)",
    type: "number",
    placeholder: "Enter price",
    required: true,
  },
  {
    name: "region",
    label: "Region",
    type: "text",
    placeholder: "Enter wine region",
    required: false,
  },
  {
    name: "vintage",
    label: "Vintage Year",
    type: "number",
    placeholder: "Enter vintage year",
  },
];

// Explicitly type the accumulator in the reduce function
const initialValues: WineFormValues = fields.reduce<WineFormValues>(
  (acc, field) => {
    acc[field.name] = ""; // Assign empty string for all initial values
    return acc;
  },
  {} as WineFormValues
);

// Validation schema
const validationSchema = Yup.object().shape(
  fields.reduce<Record<string, any>>((acc, field) => {
    if (field.required) {
      acc[field.name] = Yup.string().required(`${field.label} is required`);
    }
    if (field.name === "vintage") {
      acc[field.name] = Yup.number()
        .integer("Must be an integer")
        .min(1900, "Enter a valid year")
        .max(new Date().getFullYear(), "Enter a valid year");
    }
    if (field.name === "price") {
      acc[field.name] = Yup.number().min(0, "Cannot be negative");
    }
    return acc;
  }, {})
);

const AddWineForm = () => {
  const handleSubmit = async (values: WineFormValues, { resetForm }: any) => {
    try {
      const payload = {
        name: values.name,
        type: values.type,
        region: values.region || null,
        vintage: values.vintage || null,
        flavor_notes: values.flavorNotes, // Map camelCase to snake_case
        price: values.price,
      };

      console.log("Submitting Payload:", payload);

      const response = await fetch("/api/wines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Wine added successfully!");
        resetForm();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Add a New Wine</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block font-medium mb-1" htmlFor={field.name}>
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <Field
                    as="select"
                    id={field.name}
                    name={field.name}
                    className="w-full border-gray-300 rounded-lg p-2"
                  >
                    <option value="">-- Select {field.label} --</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                ) : field.type === "textarea" ? (
                  <Field
                    as="textarea"
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                ) : (
                  <Field
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                )}
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Add Wine
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddWineForm;
