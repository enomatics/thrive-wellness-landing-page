import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Socials = () => {
  {
    /* Add social media links here */
  }
  return (
    <div className="mt-3 flex justify-center gap-5">
      <a href="https://www.facebook.com">
        <RiFacebookCircleFill />
      </a>

      <a href="https://www.instagram.com">
        <RiInstagramFill />
      </a>

      <a href="https://www.linkedin.com">
        <RiLinkedinFill />
      </a>
    </div>
  );
};

export default Socials;
