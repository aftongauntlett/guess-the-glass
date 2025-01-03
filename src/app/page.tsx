// app/page.tsx
"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./components/InputField";
import DropdownMenu from "./components/DropdownMenu";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  color: Yup.string().required("Color is required"),
});

export default function HomePage() {
  const initialValues = {
    name: "",
    color: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Guess The Glass</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <InputField
              label="Your Name"
              name="name"
              placeholder="Enter your name"
              error={errors.name}
              touched={touched.name}
            />
            <DropdownMenu
              label="Favorite Color"
              name="color"
              options={["Red", "Blue", "Green", "Yellow"]}
              error={errors.color}
              touched={touched.color}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
