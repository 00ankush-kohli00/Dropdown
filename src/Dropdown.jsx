import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import object from "./list.json";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col w-[400px] ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between border-4 border-transparent rounded font-bold text-lg tracking-wider active:border-white duration-300 active:text-white"
      >
        Dropdown
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </button>

      {isOpen && (
        <div className="absolute bg-blue-400 w-full top-[70px] left-[0] flex flex-col">
          {object.map((items, i) => (
            <div className="border border-transparent p-4 flex justify-between font-bold hover:bg-blue-300 rounded cursor-pointer">
              <h3>{items.city}</h3>
              <h3>{items.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
