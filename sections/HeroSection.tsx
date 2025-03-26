import ActionButton from "../components/ActionButton";
import ListItem from "../components/ListItem";

const IntroSection = () => {
  const advantages = [
    "Easy to follow daily habits",
    "Practical tips for better blood sugar management",
    "Simple lifestyle changes for lasting results",
  ];

  return (
    <section className="section container gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-thrive-main text-center">
          Managing diabetes doesn&apos;t have to feel overwhelming
        </p>
        <h1 className="h1 text-center">
          Habit Guide and Builder for{" "}
          <span className="gradient-main-to-var-text">Diabetes</span> Program
        </h1>
        <p className="text-thrive-main-var text-2xl">
          28 Easy Habits to Keep You in the Lead with Diabetes
        </p>

        <p className="text-thrive-grey bold-p max-w-200 text-center">
          Small, consistent changes can make a big difference. This free guide
          will show you{" "}
          <strong className="gradient-main-to-var-text">
            28 simple, science-backed habits
          </strong>{" "}
          that can help you stay in control and feel your best.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center font-bold">
          <div className="flex items-center justify-center gap-20">
            <div>
              <img
                src="/imgs/thrive-wellness-book.png"
                alt="thrive wellness book"
              />
            </div>

            <ul className="text-thrive-main ul">
              {advantages.map((advantage, index) => (
                <ListItem key={index}>{advantage}</ListItem>
              ))}
            </ul>
          </div>

          {/* TODO - Add ActionButton component here */}
          <div className="">
            <ActionButton />
          </div>
        </div>
      </div>

      {/* <div className="border-thrive-dark flex items-center justify-center gap-3 rounded-full border bg-white px-4 py-3">
        <span>Get the FREE Guide Now</span>
        <span className="flex">
          <LuChevronsRight />
        </span>
        <ActionButton />
      </div> */}
    </section>
  );
};

export default IntroSection;
