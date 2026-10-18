import "../styles/About.css";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-badge">ABOUT US</span>

        <h1>
          Good Food.
          <br />
          <span>Good Mood.</span>
        </h1>

        <p>
          Bringing your favorite meals closer to you.
          Discover delicious food from restaurants around you
          and enjoy every bite, delivered with care.
        </p>

        <a href="#our-story" className="about-hero-btn">
          Discover Our Story →
        </a>
      </section>

      <section className="about-story" id="our-story">
        <div className="about-story-content">
          <span className="about-label">OUR STORY</span>
          <h2>Making Every Meal Special</h2>

          <p>
            We believe great food brings people together.
            Whether you're craving a quick snack, a family
            dinner, or something special, finding your next
            favorite meal should be simple and enjoyable.
          </p>

          <p>
            Our goal is to make exploring restaurants and
            discovering delicious food a delightful experience.
          </p>
        </div>

        <div className="about-food-illustration">
          <span>🍔</span>
          <span>🍕</span>
          <span>🍜</span>
          <span>🍟</span>
          <span>🥗</span>
          <span>🍰</span>
        </div>
      </section>

      <section className="about-features">
        <div className="about-section-heading">
          <span className="about-label">WHY CHOOSE US</span>
          <h2>Food You'll Love, Service You'll Trust</h2>
          <p>We want every food discovery to feel effortless.</p>
        </div>

        <div className="about-feature-grid">
          <div className="about-feature-card">
            <div className="about-feature-icon">🍽️</div>
            <h3>Variety of Choices</h3>
            <p>
              Explore different cuisines and find something
              delicious for every craving.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">⚡</div>
            <h3>Easy Experience</h3>
            <p>
              Browse restaurants, discover dishes, and find
              your next meal with ease.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">❤️</div>
            <h3>Made for Food Lovers</h3>
            <p>
              A simple, enjoyable experience built around
              your love for great food.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Find Your Next Favorite?</h2>
        <p>Your next delicious meal is just around the corner.</p>

        <a href="/" className="about-hero-btn about-cta-btn">
          Explore Restaurants →
        </a>
        {/* <UserClass name={"Sumit Jethani"}/> */}
      </section>
    </div>
  );
};

export default About;
