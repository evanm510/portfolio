import Photography from "../Photography";
import Music from "../Music";
import Geology from "../Geology";

export default () => {
  return (
    <section
      id="other-interests"
      className="scroll-mt-20 flex items-center justify-center"
    >
      <div className="w-[90%] max-w-[1400px]">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-3xl">Other Interests</div>
          <div className="flex flex-col gap-4 w-full">
            {/* Photography Section */}
            <div className="flex flex-1 flex-col items-center bg-secondary p-2 rounded-lg">
              <Photography />
            </div>

            {/* Music Section */}
            <div className="flex flex-1 flex-col items-center bg-secondary p-2 rounded-lg">
              <Music />
            </div>
            <div className="flex flex-1 flex-col items-center bg-secondary p-2 rounded-lg">
              <Geology />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
