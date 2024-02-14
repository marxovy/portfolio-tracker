import { IRootState } from "../../store";
import { useSelector } from "react-redux";

import Icon from "./Icon";

type Props = {
  label: string;
  iconPath: string;
};

const MenuButton = ({ label, iconPath }: Props) => {
  const menuCollapsed = useSelector(
    (state: IRootState) => state.ui.menuCollapsed
  );
  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  const iconClasses = darkMode ? "text-gray-300" : "text-slate-900";

  return (
    <div className="flex">
      <Icon path={iconPath} className={iconClasses} />

      <span className=" lg:hidden ml-2 text-sm font-medium">{label}</span>
      {!menuCollapsed && (
        <span className="ml-2 text-sm font-medium">{label}</span>
      )}
    </div>
  );
};

export default MenuButton;
