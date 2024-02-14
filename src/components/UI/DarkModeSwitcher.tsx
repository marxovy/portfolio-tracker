import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import MenuButton from "./MenuButton";
import { IRootState } from "../../store";

const DarkModeSwitcher = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  const toggleDarkMode = () => {
    dispatch(uiActions.toggleDarkMode());
  };

  const iconPath = darkMode
    ? `${process.env.PUBLIC_URL}/icons/light-mode.svg`
    : `${process.env.PUBLIC_URL}/icons/dark-mode.svg`;

  const label = darkMode ? "Light Mode" : "Dark Mode";

  return (
    <div
      className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 justify-center lg:justify-start cursor-pointer"
      onClick={toggleDarkMode}
    >
      <MenuButton label={label} iconPath={iconPath} />
    </div>
  );
};

export default DarkModeSwitcher;
