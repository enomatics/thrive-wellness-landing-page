import ListItem from "../components/ListItem";

const AboutSection = () => {
  const content = [
    "17 habits that would help you prevent blood sugar spikes before, during, and after your meal",
    "11 habits you can build on to make targeting a stable blood sugar throughout the day easy and approachable.",
  ];

  return (
    <section className="section container">
      <h2 className="h2">What&apos;s Inside the eBook?</h2>
      <p className="bold-p">
        This guide is designed to help you build sustainable habits for better
        health. Inside, you&apos;ll find:
      </p>
      <ul className="ul">
        {content.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>

      <p className="bold-p">
        It includes habits on nutrition, physical activity, hydration, sleep,
        and stress management.
      </p>
    </section>
  );
};

export default AboutSection;
