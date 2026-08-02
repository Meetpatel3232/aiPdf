const Input = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
      w-full
      rounded-xl
      bg-slate-950
      border
      border-violet-900
      px-5
      py-3
      text-white
      outline-none
      focus:border-violet-500
      transition-all
      "
    />
  );
};

export default Input;