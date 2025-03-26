import ListItem from "../components/ListItem";

const WhoSection = () => {
  const perfectFor = [
    "People newly diagnosed with diabetes who want a structured approach",
    "Anyone struggling with blood sugar management",
    "Those looking for easy, sustainable lifestyle changes",
    "Caregivers who want to support their loved one with diabetes",
  ];

  return (
    <section className="section container">
      <h2 className="text-5xl font-bold">Who Is This Guide For?</h2>
      <p className="bold-p">This guide is perfect for:</p>
      <ul className="ul">
        {perfectFor.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ul>
      <p className="bold-p">
        If you want to feel more in control of your health, this guide is for
        you.
      </p>
    </section>
  );
};

export default WhoSection;
