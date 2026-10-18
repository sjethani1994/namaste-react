import "../styles/Shimmer.css";

const Shimmer = () => {
  return (
    <div className="res-container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>

          <div className="shimmer-content">
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line shimmer-cuisine"></div>

            <div className="shimmer-details">
              <div className="shimmer-line shimmer-rating"></div>
              <div className="shimmer-line shimmer-time"></div>
            </div>

            <div className="shimmer-line shimmer-price"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
