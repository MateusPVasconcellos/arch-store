import { Form } from "./Form";

export const openModalAddItem = () => {
  const modal = document.querySelector(".modal-add");
  modal?.classList.remove("hidden");
};

export const closeModalAddItem = () => {
  const modal = document.querySelector(".modal-add");
  modal?.classList.add("hidden");
};

function AddItemModal(): JSX.Element {
  return (
    <div
      className="modal-add fixed top-14 right-1/4 z-20 ml-10 hidden border 
    border-gray-700 bg-gray-200 dark:bg-gray-400 md:h-2/4 md:w-72"
    >
      <div className="flex">
        <button
          className="close-modal fixed top-16"
          onClick={closeModalAddItem}
        >
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
        <div className="ml-2 mt-2 flex w-full justify-around font-bold">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default AddItemModal;
