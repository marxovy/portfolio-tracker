import { useSelector } from "react-redux";
import { Position } from "../types/Position";
import { IRootState } from "../store";

type Props = {
  investment: Position;
  onCloseInvestment: (id: number) => void;
};

const InvestmentCard = ({ investment, onCloseInvestment }: Props) => {
  const { id, investmentName, investmentType, status, date, value } =
    investment;

  const handleInvestmentClose = () => {
    onCloseInvestment(id);
  };

  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  const paragraphClasses = darkMode
    ? "text-sm mb-2 text-white"
    : "text-sm mb-2 text-gray-600";

  return (
    <div
      className={`shadow-lg rounded-lg overflow-hidden mx-auto max-w-sm w-full lg:max-w-full lg:flex ${
        darkMode ? "bg-white" : "bg-slate-700"
      }`}
    >
      <div className="p-4">
        <h3
          className={`font-semibold text-lg mb-2 ${
            darkMode ? "text-white" : "text-gray-800"
          } `}
        >
          {investmentName}
        </h3>
        <p className={paragraphClasses}>Type: {investmentType}</p>
        <p className={paragraphClasses}>Status: {status}</p>
        <p className={paragraphClasses}>Date: {date}</p>
        <p className={paragraphClasses}>Value: ${value}</p>
        {status === "Active" && (
          <button
            onClick={handleInvestmentClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Close Investment
          </button>
        )}
      </div>
    </div>
  );
};

export default InvestmentCard;
