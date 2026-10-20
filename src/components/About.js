import { Link } from "react-router-dom";
import UserClass from "./UserClass";

const foodEmojis = ["🍔", "🍕", "🍜", "🍟", "🥗", "🍰"];

const features = [
  {
    icon: "🍽️",
    title: "Variety of Choices",
    text: "Explore different cuisines and find something delicious for every craving.",
  },
  {
    icon: "⚡",
    title: "Easy Experience",
    text: "Browse restaurants, discover dishes, and find your next meal with ease.",
  },
  {
    icon: "❤️",
    title: "Made for Food Lovers",
    text: "A simple, enjoyable experience built around your love for great food.",
  },
];

const label = "inline-block text-xs font-bold tracking-[2px] text-brand";
const sectionTitle = "my-[15px] text-[clamp(28px,4vw,38px)] leading-[1.25] font-bold";
const primaryBtn =
  "inline-block rounded-[10px] bg-brand px-[25px] py-3.5 text-sm font-bold text-white shadow-[0_5px_14px_rgba(255,82,0,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-dark";

const About = () => {
  return (
    <div className="bg-white text-[#262626]">
      <section className="bg-linear-135 from-cream to-peach px-[22px] py-[65px] text-center md:px-[25px] md:py-[85px]">
        <span className={`${label} rounded-[30px] border border-[#ffd7c2] bg-white px-4 py-[9px]`}>
          ABOUT US
        </span>

        <h1 className="mt-[25px] mb-[15px] text-[clamp(42px,7vw,70px)] leading-[1.1] font-bold tracking-[-2px]">
          Good Food.
          <br />
          <span className="text-brand">Good Mood.</span>
        </h1>

        <p className="mx-auto mb-[30px] max-w-[620px] text-[17px] leading-[1.8] text-[#666]">
          Bringing your favorite meals closer to you.
          Discover delicious food from restaurants around you
          and enjoy every bite, delivered with care.
        </p>

        <a href="#our-story" className={primaryBtn}>
          Discover Our Story →
        </a>
      </section>

      <section
        className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-[30px] px-[22px] py-[55px] md:grid-cols-2 md:gap-[50px] md:px-[30px] md:py-20"
        id="our-story"
      >
        <div>
          <span className={label}>OUR STORY</span>
          <h2 className={sectionTitle}>Making Every Meal Special</h2>

          <p className="my-4 text-[15px] leading-[1.9] text-[#666]">
            We believe great food brings people together.
            Whether you're craving a quick snack, a family
            dinner, or something special, finding your next
            favorite meal should be simple and enjoyable.
          </p>

          <p className="my-4 text-[15px] leading-[1.9] text-[#666]">
            Our goal is to make exploring restaurants and
            discovering delicious food a delightful experience.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-[25px] bg-cream p-5 md:gap-[18px] md:p-[30px]">
          {foodEmojis.map((emoji) => (
            <span
              key={emoji}
              className="flex min-h-20 items-center justify-center rounded-[18px] bg-white text-[34px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-[5px] hover:-rotate-3 md:min-h-[100px] md:text-[43px]"
            >
              {emoji}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#fafafa] px-[22px] py-[55px] md:px-[30px] md:py-[75px]">
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <span className={label}>WHY CHOOSE US</span>
          <h2 className={sectionTitle}>Food You'll Love, Service You'll Trust</h2>
          <p className="leading-[1.7] text-[#777]">
            We want every food discovery to feel effortless.
          </p>
        </div>

        <div className="mx-auto grid max-w-[480px] grid-cols-1 gap-[25px] md:max-w-[1100px] md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[18px] border border-[#eee] bg-white px-[25px] py-[30px] shadow-[0_5px_20px_rgba(0,0,0,0.035)] transition duration-250 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex size-[60px] items-center justify-center rounded-[15px] bg-peach text-[30px]">
                {feature.icon}
              </div>
              <h3 className="mt-[22px] mb-3 text-[19px] font-bold">
                {feature.title}
              </h3>
              <p className="text-sm leading-[1.8] text-[#777]">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-[18px] my-[35px] rounded-3xl bg-[#252525] px-5 py-10 text-center text-white md:mx-[30px] md:my-[60px] md:px-[25px] md:py-[55px]">
        <h2 className="text-[clamp(25px,4vw,35px)] leading-[1.25] font-bold">
          Ready to Find Your Next Favorite?
        </h2>
        <p className="mt-[15px] mb-[25px] leading-[1.7] text-[#d0d0d0]">
          Your next delicious meal is just around the corner.
        </p>

        <Link to="/" className={primaryBtn}>
          Explore Restaurants →
        </Link>
        {/* <UserClass /> */}
      </section>
    </div>
  );
};

export default About;
