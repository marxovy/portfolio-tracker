import SVG from "react-inlinesvg";

type Props = {
  path: string;
  className: string;
};

const Icon = ({ path, className }: Props) => {
  return (
    <div>
      {/* 
        * Unresolved React 18 broken type definitions
        * or possible mismatch in @types/react
        * 
        @ts-expect-error */}
      <SVG src={path} height="24" className={className} />
    </div>
  );
};

export default Icon;
