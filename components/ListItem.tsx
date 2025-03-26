import { LuCircleCheckBig } from "react-icons/lu";

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start justify-center gap-3">
      <span className="h-full">
        <LuCircleCheckBig />
      </span>
      <span className="h-full">{children}</span>
    </li>
  );
};

export default ListItem;
