// Moving grey gradient used by every placeholder line (animate-shimmer is defined in index.css)
const shimmerLine =
  "animate-shimmer rounded-md bg-[linear-gradient(90deg,#eeeeee_25%,#f7f7f7_50%,#eeeeee_75%)] bg-size-[200%_100%]";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-stretch gap-[25px] px-4 py-[50px] xs:px-8 md:px-[50px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          className="min-h-[280px] overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
          key={index}
        >
          <div className={`h-40 w-full rounded-none ${shimmerLine}`}></div>

          <div className="p-3.5">
            <div className={`mb-3 h-[17px] w-3/4 ${shimmerLine}`}></div>
            <div className={`mb-4 h-3 w-[90%] ${shimmerLine}`}></div>

            <div className="mb-3.5 flex justify-between">
              <div className={`h-[13px] w-[55px] ${shimmerLine}`}></div>
              <div className={`h-[13px] w-[75px] ${shimmerLine}`}></div>
            </div>

            <div className={`h-3 w-[45%] ${shimmerLine}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
