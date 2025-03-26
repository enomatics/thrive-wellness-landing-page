import { useState } from "react";
import { useNavigate } from "react-router";

const GetGuide = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <section className="section mx-auto mt-20 flex h-[85dvh] items-center justify-center gap-10">
      <div className="container h-full">
        <img
          src="/imgs/thrive-wellness-book.png"
          alt="Diabetes Guide"
          //   height={500}
        />
      </div>
      <div className="container">
        <h2 className="h2">Habit Guide and Builder for Diabetes Program</h2>
        <p className="bold-p">
          Please fill out the form below to receive your{" "}
          <span className="text-thrive-main">free guide.</span>
        </p>

        <form className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input"
          />

          <input
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input"
          />

          <button
            className="btn btn-thrive-main"
            onClick={(e) => {
              e.preventDefault();
              navigate("/thank-you");
            }}
          >
            Get the Free Guide
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetGuide;
