import { useSelector } from "react-redux";

import InvestmentWidgetPanel from "./InvestmentWidgetPanel";
import { IRootState } from "../../store";

const InvestmentsSummary = () => {
  const positions = useSelector(
    (state: IRootState) => state.investments.positions
  );
  const openPositionsCount = positions.filter(
    (position) => position.status === "Active"
  ).length;

  const totalInvestedValue = positions.reduce((accumulator, position) => {
    return accumulator + position.value;
  }, 0);

  const closedPositionsCount = positions.length - openPositionsCount;
  const ICON_PATHS = {
    DOLLAR: `${process.env.PUBLIC_URL}/icons/dollar.svg`,
    LOCK_OPEN: `${process.env.PUBLIC_URL}/icons/lock-open.svg`,
    LOCK_CLOSED: `${process.env.PUBLIC_URL}/icons/lock-closed.svg`,
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-4 lg:space-x-4 w-full pr-2">
      <InvestmentWidgetPanel
        label="Total Invested"
        iconPath={ICON_PATHS.DOLLAR}
        iconClasses={"text-blue-600"}
        value={totalInvestedValue}
      />
      <InvestmentWidgetPanel
        label="Open Positions"
        iconPath={ICON_PATHS.LOCK_OPEN}
        iconClasses={"text-green-600"}
        value={openPositionsCount}
      />
      <InvestmentWidgetPanel
        label="Closed Positions"
        iconPath={ICON_PATHS.LOCK_CLOSED}
        iconClasses={"text-red-600"}
        value={closedPositionsCount}
      />
    </div>
  );
};

export default InvestmentsSummary;
