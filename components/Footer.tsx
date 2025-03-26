import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-thrive-dark flex w-full flex-col py-3 pb-10 text-center text-white">
      <p>
        2025 &copy; <b>THRIVEWELLNESS</b> All Rights Reserved
      </p>

      {/* Add social media links here */}
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
    </footer>
  );
};

export default Footer;
