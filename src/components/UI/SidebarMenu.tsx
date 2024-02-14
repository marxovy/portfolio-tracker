import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

import DarkModeSwitcher from "./DarkModeSwitcher";
import MenuCollapseSwitcher from "./MenuCollapseSwitch";
import MenuItem from "./MenuItem";
import { IRootState } from "../../store";

const ICON_PATHS = {
  DASHBOARD: `${process.env.PUBLIC_URL}/icons/dashboard.svg`,
  SETTINGS: `${process.env.PUBLIC_URL}/icons/settings.svg`,
  LOGO: `${process.env.PUBLIC_URL}/icons/logo.svg`,
  MENU: `${process.env.PUBLIC_URL}/icons/menu.svg`,
  MENU_HIDE: `${process.env.PUBLIC_URL}/icons/menu-hide.svg`,
};

const SidebarMenu = () => {
  const menuCollapsed = useSelector(
    (state: IRootState) => state.ui.menuCollapsed
  );
  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  const dispatch = useDispatch();

  const toggleMenuCollapse = () => {
    dispatch(uiActions.toggleMenuCollapse());
  };

  let classes =
    "fixed lg:static flex lg:flex-none items-center py-4 overflow-hidden rounded lg:h-screen shadow-xl z-50";
  if (darkMode) {
    classes += " text-gray-300 bg-slate-800";
  } else {
    classes += " text-gray-700 bg-white";
  }

  if (!menuCollapsed) {
    classes += " w-screen lg:w-40";
  } else {
    classes += " w-screen lg:w-12";
  }

  return (
    <div className={classes}>
      <div className="flex w-full flex-col items-center h-full  lg:justify-between">
        <div className="w-full lg:hidden justify-center">
          <MenuCollapseSwitcher />
          {menuCollapsed && (
            <div className="mb-2" onClick={toggleMenuCollapse}>
              <MenuItem
                label="Dashboard"
                route="/"
                iconPath={ICON_PATHS.DASHBOARD}
              />
              <MenuItem
                label="Settings"
                route="/settings"
                iconPath={ICON_PATHS.SETTINGS}
              />
              <DarkModeSwitcher />
            </div>
          )}
        </div>
        <div className="w-full hidden lg:block">
          <MenuItem
            label="Dashboard"
            route="/"
            iconPath={ICON_PATHS.DASHBOARD}
          />
          <MenuItem
            label="Settings"
            route="/settings"
            iconPath={ICON_PATHS.SETTINGS}
          />
        </div>
        <div className="pb-4 hidden lg:block">
          <MenuCollapseSwitcher />
          <DarkModeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
