import { useFormik } from "formik";
import React, { useState } from "react";
import { formSchema } from "../schemas/FormSchema";
import Select from "react-tailwindcss-select";
import { useApi } from "../hooks/useApi";

export function Form(): JSX.Element {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");
  const { createProduct } = useApi();

  const options = [
    { value: "mens-watches", label: "Mens Watches" },
    { value: "womens-watches", label: "Womens Watches" },
    { value: "smartphones", label: "Smartphones" },
    { value: "laptops", label: "Laptops" },
  ];

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      thumbnailUrl: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      await createProduct(values);
      await resetForm();
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    handleSubmit(e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setApiError("");
  };

  const handleChangeSelect = (value: any) => {
    setFieldValue("category", value);
  };

  return (
    <form
      className="mt-6 flex flex-col items-center"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        className="mb-3 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="title"
        onChange={(e) => onChange(e)}
        value={values.title}
        name="title"
      />
      {showErrors && <span className="mt-2 text-red-500">{errors.title}</span>}
      {apiError && <span className="text-red-500">{apiError}</span>}
      <input
        className="mb-3 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="description"
        onChange={(e) => onChange(e)}
        value={values.description}
        name="description"
      />
      {showErrors && (
        <span className="mt-2 text-red-500">{errors.description}</span>
      )}
      {apiError && <span className="text-red-500">{apiError}</span>}
      <input
        className="mb-3 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="price"
        onChange={(e) => onChange(e)}
        value={values.price}
        name="price"
      />
      {showErrors && <span className="mt-2 text-red-500">{errors.price}</span>}
      {apiError && <span className="text-red-500">{apiError}</span>}
      <input
        className="mb-3 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="image url"
        onChange={(e) => onChange(e)}
        value={values.thumbnailUrl}
        name="thumbnailUrl"
      />
      {showErrors && (
        <span className="mt-2 text-red-500">{errors.thumbnailUrl}</span>
      )}
      {apiError && <span className="text-red-500">{apiError}</span>}
      <div className="w-4/5 md:w-3/4">
        <Select
          options={options}
          placeholder="category"
          primaryColor={"indigo"}
          value={values.category as any}
          onChange={handleChangeSelect}
        />
      </div>
      {showErrors && (
        <span className="mt-2 text-red-500">{errors.category}</span>
      )}
      {apiError && <span className="text-red-500">{apiError}</span>}
      <button
        className="mt-4 mb-3 w-4/5 rounded bg-blue-400 px-2 py-1 text-sm font-bold 
        uppercase text-gray-800 hover:bg-yellow-600 dark:bg-blue-600 md:w-2/5"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
