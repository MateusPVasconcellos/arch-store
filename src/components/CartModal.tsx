import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

function CartModal({}) {
  const { cartItems, itemsDetails } = useCart();

  const closeCart = () => {
    const modal = document.querySelector(".modal");
    modal?.classList.add("hidden");
  };

  return (
    <div
      className="modal fixed top-0 right-0 z-20 hidden h-full w-52
        overflow-x-scroll border border-gray-700 bg-gray-200 dark:bg-gray-400 md:w-72"
    >
      <div className="flex">
        <button className="close-modal top-0" onClick={closeCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 mt-1 h-6 w-6 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="ml-6 mt-2 font-bold">
          <h1>YOUR CART</h1>
        </div>
      </div>
      <div className="h-full">
        <ul>
          {itemsDetails &&
            itemsDetails.map((item: any) => (
              <li>
                <CartItem
                  imageUrl={item.thumbnail}
                  productName={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default CartModal;
