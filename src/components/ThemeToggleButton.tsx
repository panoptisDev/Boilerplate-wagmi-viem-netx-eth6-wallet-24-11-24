import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from "./ThemeToggleButton.module.css";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center mr-2">
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        checked={theme === 'dark'}
      />
      <label htmlFor="checkbox" className={`flexBetween ${styles.label}`}>
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
        <div className={styles.ball} />
      </label>
    </div>
  );
};

export default ThemeToggleButton;