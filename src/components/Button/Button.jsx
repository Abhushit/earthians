import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick ,className}) => {
  return (
    <button
      className={twMerge(
        "outline-none bg-indigo-500 text-white px-2 py-2 rounded-md hover:bg-indigo-600 active:bg-indigo-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
