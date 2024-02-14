import { Link } from "react-router-dom";

import MenuButton from "./MenuButton";

type Props = {
  label: string;
  route: string;
  iconPath: string;
  [x: string]: unknown;
};

const MenuItem = ({ label, route, iconPath, ...props }: Props) => {
  return (
    <Link
      to={route}
      {...props}
      className="flex items-center justify-center lg:justify-start w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
    >
      <MenuButton label={label} iconPath={iconPath} />
    </Link>
  );
};

export default MenuItem;
