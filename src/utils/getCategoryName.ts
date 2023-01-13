export const getCategoryName = (category: string) => {
  if (category === "mens watches") return category.replace(" ", "-");
  if (category === "womens watches") return category.replace(" ", "-");
  return category;
};
