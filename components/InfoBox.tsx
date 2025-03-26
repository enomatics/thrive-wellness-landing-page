import { RiSparklingLine } from "react-icons/ri";

const InfoBox = ({ why, details }: { why: string; details: string }) => {
  return (
    <div className="flex w-[500px] flex-col items-center justify-center rounded-[10px] p-4">
      <div className="bg-thrive-light rounded-full p-5">
        <RiSparklingLine />
      </div>
      <h4 className="text-thrive-dark mb-2 text-xl font-bold">{why}</h4>
      <p className="text-thrive-grey text-sm">{details}</p>
    </div>
  );
};

export default InfoBox;
