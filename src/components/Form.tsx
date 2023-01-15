import { useFormik } from "formik";
import React, { useState } from "react";
import { formSchema } from "../schemas/FormSchema";

function Form(): JSX.Element {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  /*   const { search, error, isSearchLoading, setError } = useSearch(); */
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      thumbnailUrl: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {},
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    handleSubmit(e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    /*     setError(""); */
  };

  return (
    <form
      className="mt-6 flex flex-col items-center"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        className="mb-2 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="title"
        onChange={(e) => onChange(e)}
        value={values.title}
        name="title"
      />
      <input
        className="mb-2 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="description"
        onChange={(e) => onChange(e)}
        value={values.description}
        name="description"
      />
      <input
        className="mb-2 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="category"
        onChange={(e) => onChange(e)}
        value={values.category}
        name="category"
      />
      <input
        className="mb-2 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="price"
        onChange={(e) => onChange(e)}
        value={values.price}
        name="price"
      />
      <input
        className="mb-2 flex w-4/5 rounded-md border border-gray-600 bg-gray-300 
        p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-300 md:w-3/4"
        type="text"
        required
        placeholder="image url"
        onChange={(e) => onChange(e)}
        value={values.thumbnailUrl}
        name="thumbnailUrl"
      />
      {/*       {showErrors && <span className="mt-2 text-red-500">{errors.user}</span>}
      {error && <span className="text-red-500">{error}</span>} */}
      <button
        className="mt-1 mb-3 w-4/5 rounded bg-blue-400 px-2 py-1 text-sm font-bold 
        uppercase text-gray-800 hover:bg-yellow-600 dark:bg-blue-600 md:w-2/5"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}

export default Form;
