import AreaInvestments from "../widgets/AreaInvestments";
import InvestmentManagement from "../UI/InvestmentManagement";
import InvestmentsSummary from "../widgets/InvestmentsSummary";

const Investments = () => {
  return (
    <div className="flex flex-col grow gap-y-12 lg:mt-0">
      <InvestmentsSummary />
      <AreaInvestments />
      <InvestmentManagement />
    </div>
  );
};

export default Investments;
