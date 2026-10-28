import { useTheme } from "../../Context/ThemeContext.jsx";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3 text-gray-700 dark:text-white">
      <span>Light</span>

      <button
        type="button"
        onClick={toggleTheme}
        className="relative h-7 w-14 rounded-full bg-indigo-500"
      >
        <span
          className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
            dark ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>

      <span>Dark</span>
    </div>
  );
};

export default ThemeToggle;