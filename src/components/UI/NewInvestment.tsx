import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { investmentActions } from "../../store/investments-slice";

import Modal from "./Modal";
import Input from "./Input";
import { IRootState } from "../../store";

const NewInvestment = () => {
  const [newInvestment, setNewInvestment] = useState<string>();

  const dispatch = useDispatch();

  const investmentInProgress = useSelector(
    (state: IRootState) => state.investments.investmentInProgress
  );

  const handleInvest = () => {
    dispatch(investmentActions.increaseInvestment({ value: newInvestment }));
  };

  const handleCancelAction = () => {
    dispatch(investmentActions.closeInvestmentModal());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInvestment(e.target.value);
  };

  return (
    <Modal
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      open={investmentInProgress}
    >
      <div className="">
        <div className="p-4">
          <Input
            label={"Invest"}
            value={newInvestment}
            onChange={handleInputChange}
            onSubmit={handleInvest}
          />
        </div>
        <div className="p-4">
          <>
            <button
              className="w-full bg-gray-200 text-white rounded-full px-4 py-2 hover:bg-gray-700 focus:outline-none focus:shadow-outline-bluе"
              onClick={handleCancelAction}
            >
              Cancel
            </button>
          </>
        </div>
      </div>
    </Modal>
  );
};

export default NewInvestment;
