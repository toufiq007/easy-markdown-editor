/* eslint-disable react/prop-types */
export default function Button({ children, handleActions }) {
  return (
    <button
    onClick={handleActions}
      className="px-6 py-2 rounded-lg bg-[var(--text)] text-white 
        hover:bg-[var(--secondary)] cursor-pointer hover:text-white font-bold  active:scale-95 transition-all duration-200"
    >
      {children}
    </button>
  );
}
