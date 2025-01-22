import Photography from "../Photography";
import Music from "../Music";

export default () => {
  return (
    <section
      id="other-interests"
      className="w-[90%] scroll-mt-20 flex items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-3xl">Other Interests</div>
        <div className="flex gap-4 w-full">
          {/* Photography Section */}
          <div className="flex flex-1 flex-col items-center bg-secondary p-2 rounded-lg">
            <Photography />
          </div>

          {/* Music Section */}
          <div className="flex flex-1 flex-col items-center bg-secondary p-2 rounded-lg">
            <Music />
          </div>
        </div>
      </div>
    </section>
  );
};
