import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import { IRootState } from "../../store";

import MenuButton from "./MenuButton";

const MenuCollapseSwitcher = () => {
  const dispatch = useDispatch();

  const menuCollapsed = useSelector(
    (state: IRootState) => state.ui.menuCollapsed
  );

  const toggleMenuCollapse = () => {
    dispatch(uiActions.toggleMenuCollapse());
  };

  const iconPath = menuCollapsed
    ? `${process.env.PUBLIC_URL}/icons/menu.svg`
    : `${process.env.PUBLIC_URL}/icons/menu-hide.svg`;

  const mobileIconPath = !menuCollapsed
    ? `${process.env.PUBLIC_URL}/icons/menu.svg`
    : `${process.env.PUBLIC_URL}/icons/menu-hide.svg`;

  const mobileLabel = "";

  return (
    <>
      <div
        className="h-8 flex lg:hidden justify-end"
        onClick={toggleMenuCollapse}
      >
        <MenuButton label={mobileLabel} iconPath={mobileIconPath} />
      </div>
      <div
        className="hidden lg:flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 cursor-pointer"
        onClick={toggleMenuCollapse}
      >
        <MenuButton label="Collapse Menu" iconPath={iconPath} />
      </div>
    </>
  );
};

export default MenuCollapseSwitcher;
