import { useCart } from "../hooks/useCart";

interface AddItemButtonProps {
  id: number;
  category: string;
}

function AddItemButton({ id, category }: AddItemButtonProps): JSX.Element {
  const { addOneMoreItem } = useCart();
  return (
    <button
      title="Add +1 to cart"
      className="ml-12 mt-2 rounded-xl bg-blue-400 p-1 text-xs
                   dark:bg-blue-600 md:relative md:bottom-12 md:left-12 lg:left-20"
      onClick={() => {
        addOneMoreItem(id, category);
      }}
    >
      ADD TO CART
    </button>
  );
}

export default AddItemButton;
