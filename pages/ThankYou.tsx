import { useNavigate } from "react-router";
import Socials from "../components/Socials";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <section className="section mx-auto mt-20 h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-5 rounded-3xl">
        <div className="bg-thrive-grey flex h-40 items-center justify-center rounded-full p-5">
          <img src="/imgs/email-sent.png" alt="Email sent" className="h-full" />
        </div>
        <div className="flex flex-col gap-5 rounded-l-3xl text-center">
          <h2 className="h2 !text-center">Thank You!</h2>
          <p className="bold-p">
            We just sent you an email with the guide. If you don't see it in
            your inbox, please check your spam folder.
          </p>
          <button className="btn" onClick={() => navigate("/")}>
            Back to site
          </button>

          <div className="text-thrive-grey flex flex-col items-center justify-center">
            <p className="bold-p !text-thrive-main">Follow us</p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
