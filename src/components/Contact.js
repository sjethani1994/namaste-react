import { useState } from "react";
import { Link } from "react-router-dom";

const contactDetails = [
  { icon: "✉️", title: "Email Us", value: "support@example.com" },
  { icon: "📞", title: "Call Us", value: "+91 00000 00000" },
  { icon: "📍", title: "Our Location", value: "India" },
];

const labelClass = "text-[13px] font-semibold text-[#333]";
const fieldClass =
  "w-full rounded-[10px] border border-[#e5e5e5] bg-[#fcfcfc] px-3.5 py-[13px] text-sm text-[#262626] outline-none transition placeholder:text-[#aaa] focus:border-brand focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,82,0,0.1)]";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form data:", formData);
    alert("Thanks for contacting us!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-[#262626]">
      <section className="bg-linear-135 from-cream to-peach px-5 py-[50px] text-center xs:px-[25px] xs:py-[65px]">
        <span className="inline-block rounded-[30px] border border-[#ffd7c2] bg-white px-4 py-[9px] text-xs font-bold tracking-[2px] text-brand">
          GET IN TOUCH
        </span>

        <h1 className="mx-auto mt-[22px] mb-[15px] max-w-[800px] text-[34px] leading-[1.2] font-bold xs:text-[clamp(34px,5vw,54px)]">
          We'd Love to <span className="text-brand">Hear From You.</span>
        </h1>

        <p className="mx-auto max-w-[650px] leading-[1.8] text-[#666]">
          Have a question, feedback, or just want to say hello? We're here to
          help make your food experience better.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-[35px] px-[22px] py-[45px] md:grid-cols-[0.85fr_1.15fr] md:gap-[45px] md:px-[30px] md:py-[65px]">
        <div className="md:pt-3">
          <span className="text-xs font-bold tracking-[2px] text-brand">
            CONTACT INFORMATION
          </span>
          <h2 className="mt-[15px] mb-3 text-[30px] font-bold">Let's Talk!</h2>

          <p className="text-sm leading-[1.8] text-[#777]">
            Have something on your mind? Send us a message and let us know how
            we can help.
          </p>

          {contactDetails.map((detail) => (
            <div
              key={detail.title}
              className="mt-[22px] flex items-center gap-4 rounded-[14px] border border-[#f0f0f0] bg-white p-[17px] transition hover:-translate-y-[3px] hover:shadow-[0_7px_20px_rgba(0,0,0,0.05)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-peach text-[22px]">
                {detail.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-[15px] font-bold">{detail.title}</h3>
                <p className="text-[13px] wrap-anywhere text-[#777]">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-[25px] flex items-start gap-3 rounded-[14px] bg-cream p-[18px]">
            <span className="text-2xl">🍽️</span>
            <p className="text-[13px] leading-[1.7] text-[#6b554a]">
              Your feedback helps us create a better experience for every food
              lover.
            </p>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#eee] bg-white px-[17px] py-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] xs:p-[25px] md:p-8">
          <h2 className="mb-3 text-[25px] font-bold">Send Us a Message</h2>
          <p className="mb-[25px] text-sm leading-[1.8] text-[#777]">
            Fill out the form below and say hello.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-[18px]">
              <div className="mb-5 flex flex-col gap-[9px]">
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className={`h-[46px] ${fieldClass}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-5 flex flex-col gap-[9px]">
                <label htmlFor="contact-email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={`h-[46px] ${fieldClass}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-[9px]">
              <label htmlFor="contact-subject" className={labelClass}>
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What is this regarding?"
                className={`h-[46px] ${fieldClass}`}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5 flex flex-col gap-[9px]">
              <label htmlFor="contact-message" className={labelClass}>
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                className={`min-h-[130px] resize-y ${fieldClass}`}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-brand p-[15px] text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_6px_15px_rgba(255,82,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand/30 active:translate-y-0"
            >
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <section className="mx-[15px] mb-[30px] rounded-[20px] bg-[#252525] px-[18px] py-[35px] text-center text-white xs:mx-[30px] xs:mb-[50px] xs:px-[25px] xs:py-[45px]">
        <h2 className="mb-3 text-[clamp(23px,4vw,32px)] font-bold">
          Hungry for Something Delicious?
        </h2>
        <p className="mb-[25px] text-sm leading-[1.7] text-[#d0d0d0]">
          Head back and discover your next favorite meal.
        </p>

        <Link
          to="/"
          className="inline-block rounded-[10px] bg-brand px-[22px] py-[13px] text-sm font-bold text-white transition-colors hover:bg-brand-dark"
        >
          Explore Restaurants →
        </Link>
      </section>
    </div>
  );
};

export default Contact;
