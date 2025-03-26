import { Link } from "react-router";

const ActionButton = () => {
  return (
    <Link
      to={"/get-guide"}
      className="bg-thrive-main hover:bg-thrive-main-var cursor-pointer rounded-full px-4 py-2 font-medium text-white"
    >
      Get the Free Guide
    </Link>
  );
};

export default ActionButton;
