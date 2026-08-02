import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative mb-5">
      <FiSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search conversations..."
        className="
          w-full
          rounded-xl
          bg-slate-800
          border
          border-violet-900
          py-3
          pl-11
          pr-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
        "
      />
    </div>
  );
};

export default SearchBar;