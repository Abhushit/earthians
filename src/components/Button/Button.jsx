import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "outline-none bg-blue-700 text-white px-2 py-2 rounded-md  active:bg-blue-800",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
