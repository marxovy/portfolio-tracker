import { useDispatch, useSelector } from "react-redux";
import { investmentActions } from "../../store/investments-slice";
import { Position } from "../../types/Position";
import { IRootState } from "../../store";

type Props = {
  position: Position;
};

const InvestmentCard = ({ position }: Props) => {
  const { id, investmentType, investmentName, status, date, value } = position;

  const dispatch = useDispatch();

  const togglePosition = () => {
    dispatch(investmentActions.togglePosition(id));
  };

  const openNewInvestment = () => {
    dispatch(investmentActions.openInvestmentModal(id));
  };

  const darkMode = useSelector((state: IRootState) => state.ui.darkMode);

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-gray-700"
      }`}
    >
      <div
        className={`p-1 ${status === "Active" ? "bg-green-400" : "bg-red-400"}`}
      ></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">{investmentName}</h2>
        <p className="text-4xl font-bold mb-6">${value}</p>
        <ul className="text-sm  mb-6">
          <li className="mb-2 flex items-center gap-1">
            <strong>Type:</strong>
            <span className="">{investmentType}</span>
          </li>
          <li className="mb-2 flex items-center gap-1">
            <strong>Status:</strong>
            <strong
              className={
                status === "Active" ? "text-green-700" : "text-red-700"
              }
            >
              {status}
            </strong>
          </li>
          <li className="mb-2 flex items-center gap-1">
            <strong>Date: </strong>
            <span>{date}</span>
          </li>
        </ul>
      </div>
      <div className="p-4">
        {status === "Active" && (
          <>
            <button
              className="w-full bg-green-600 text-white rounded-full px-4 py-2 my-3 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={openNewInvestment}
            >
              New Investment
            </button>
            <button
              className="w-full bg-red-200 text-white rounded-full px-4 py-2 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={togglePosition}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default InvestmentCard;
