import SVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const InvestmentWidgetPanel = ({
  iconPath,
  iconClasses = "",
  label,
  value,
}) => {
  const mergedIconClasses = "w-20 h-20 " + iconClasses;

  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  let wrapperClasses =
    "w-full lg:w-1/3 my-2 rounded-xl shadow-lg flex items-center justify-around py-8";

  if (darkMode) {
    wrapperClasses += " bg-slate-800";
  } else {
    wrapperClasses += " bg-white";
  }

  const headingClasses = darkMode
    ? "text-4xl font-bold text-gray-300"
    : "text-4xl font-bold text-gray-800";

  const textClasses = darkMode ? "text-gray-200" : "text-gray-500";

  return (
    <div className={wrapperClasses}>
      {/* 
        * Unresolved React 18 broken type definitions
        * or possible mismatch in @types/react
        * 
        @ts-expect-error */}
      <SVG src={iconPath} className={mergedIconClasses} />
      <div className="text-center">
        <h1 className={headingClasses}>{value}</h1>
        <span className={textClasses}>{label}</span>
      </div>
    </div>
  );
};

export default InvestmentWidgetPanel;
