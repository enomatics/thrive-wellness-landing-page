import ActionButton from "../components/ActionButton";

const CTA = () => {
  return (
    <section className="wide-section container gap-20">
      <h2 className="text-5xl font-bold">
        Ready to Take Control? Get Your{" "}
        <span className="gradient-main-to-var-text">Free Guide </span>
        Today!
      </h2>
      <p className="bold-p">
        Don't wait to start building better habits. Get instant access to the
        Habit Guide and Builder for Diabetes Program—
        <span className="gradient-main-to-var-text">FREE</span>!
      </p>

      <div>
        <ActionButton />
      </div>

      <div className="overflow-hidden rounded-3xl">
        <img
          src="/imgs/thrive-website-banner.webp"
          alt="thrive website banner"
        />
      </div>
    </section>
  );
};

export default CTA;
