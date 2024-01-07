import { FaMagic } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
const CreateTab = ({ closeTab }) => {

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between py-4 px-4 border-y  border-white/10">
        <div className="font-semibold text-normal flex items-center gap-3">
          <div className="p-2 rounded-md bg-blue-700 text-white">
            <FaMagic />
          </div>
          <p>Create</p>
        </div>
        <button
          onClick={closeTab}
          className="text-slate-300  active:text-slate-400"
        >
          <IoIosClose size={35} />
        </button>
      </div>
    </div>
  );
};
export default CreateTab;
