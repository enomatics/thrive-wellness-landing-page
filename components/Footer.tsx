import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-thrive-dark flex w-full flex-col px-5 py-5 text-center text-white md:py-10">
      <p className="text-sm">
        2025 &copy; <b>THRIVEWELLNESS</b> All Rights Reserved
      </p>

      <Socials />
    </footer>
  );
};

export default Footer;
