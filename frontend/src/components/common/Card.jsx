const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-slate-900 border border-violet-900 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;