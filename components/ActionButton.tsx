import { useState } from "react";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router";

const ActionButton = () => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("/get-guide")}
      className="btn flex items-center justify-center"
    >
      <span>Get the Free Guide</span>
      {!hovered ? (
        <span className="m-2">
          <LuArrowUpRight />
        </span>
      ) : (
        <span className="m-2">
          <LuArrowRight />
        </span>
      )}
    </button>
  );
};

export default ActionButton;
