import { Outlet } from "react-router-dom";
import SidebarMenu from "../UI/SidebarMenu";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
const RootLayout = () => {
  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  let rootClasses = "flex overflow-y-auto";

  if (darkMode) {
    rootClasses += " bg-slate-900";
  } else {
    rootClasses += " bg-gray-100";
  }

  return (
    <div className={rootClasses}>
      <SidebarMenu />
      <main className="flex grow mx-4 mt-16 lg:mt-0 h-screen lg:h-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
