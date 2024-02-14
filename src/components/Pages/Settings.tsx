import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";
import { settingsActions } from "../../store/settings";
import { IRootState } from "../../store";

const Settings = () => {
  const userFirstName = useSelector(
    (state: IRootState) => state.settings.firstName
  );
  const userLastName = useSelector(
    (state: IRootState) => state.settings.lastName
  );
  const userAge = useSelector((state: IRootState) => state.settings.age);

  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [age, setAge] = useState(userAge);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(settingsActions.updateProfile({ firstName, lastName, age }));
  };

  return (
    <div className="mx-auto right-0 mt-2">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <svg
            aria-hidden="true"
            role="img"
            className="h-24 w-24 text-white rounded-full mx-auto"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
            ></path>
          </svg>
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {userFirstName} {userLastName}
          </p>
          {userAge && (
            <p className="text-sm text-gray-100">{userAge} years old</p>
          )}
          <div className="mt-5">
            <div className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Manage your Account
            </div>
          </div>
        </div>
        <div className="border-b p-4">
          <p className="py-2">
            <Input
              label="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </p>
          <p className="py-2">
            <Input
              label="First Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </p>
          <p className="py-2">
            <Input
              label="Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </p>
          <p className="px-2 pt-3 flex justify-center">
            <button
              className="select-none rounded bg-green-700 py-3 px-8 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={handleSubmit}
            >
              Update
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
