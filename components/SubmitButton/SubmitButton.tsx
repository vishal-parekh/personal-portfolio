import { FaPaperPlane } from "react-icons/fa";

export const SubmitButton = () => {
  return (
    <div className="flex justify-center pt-4">
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 bg-white bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      >
        Submit
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
};
