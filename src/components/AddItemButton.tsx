import { useCart } from "../hooks/useCart";

interface AddItemButtonProps {
  id: number;
}

function AddItemButton({ id }: AddItemButtonProps) {
  const { increaseItem } = useCart();
  return (
    <button
      className="ml-12 mt-2 rounded-xl bg-blue-400 p-1 text-xs
                   dark:bg-blue-600 md:relative md:bottom-12 md:left-12 lg:left-20"
      onClick={() => {
        increaseItem(id);
      }}
    >
      ADD TO CART
    </button>
  );
}

export default AddItemButton;
