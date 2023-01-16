import * as yup from "yup";

export const formSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required.")
    .max(50, "Maximum 50 characters."),
  description: yup
    .string()
    .required("Description is required.")
    .max(100, "Maximum 50 characters."),
  category: yup
    .string()
    .required("Category is required.")
    .max(20, "Maximum 50 characters."),
  price: yup
    .string()
    .required("Price is required.")
    .max(20, "Maximun 20 characters"),
  thumbnailUrl: yup
    .string()
    .required("Image url is required.")
    .max(100, "Maximum 100 characters"),
});
