import { useSelector } from "react-redux";

import InvestmentCard from "./InvestmentCard";
import NewInvestment from "./NewInvestment";
import { IRootState } from "../../store";

const InvestmentManagement = () => {
  const userPositions = useSelector(
    (state: IRootState) => state.investments.positions
  );
  const investmentInProgress = useSelector(
    (state: IRootState) => state.investments.investmentInProgress
  );
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6">
        {userPositions.map((position) => (
          /* 
          * inferred type mismatches the expected one,
          * needs further investigation
          * 
          @ts-expect-error */
          <InvestmentCard key={position.id} position={position} />
        ))}
      </div>
      <NewInvestment key={investmentInProgress} />
    </div>
  );
};

export default InvestmentManagement;
